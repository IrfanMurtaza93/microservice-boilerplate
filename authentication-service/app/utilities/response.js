const HttpStatus = require("http-status-codes");

const responseMessages = {
  200: "Success: Request is processed successfully.",
  400: "Bad Request: Server could not understand the request",
  401: "Unauthorized: Client is not authorized for this request",
  403: "Forbidden: Client does not have access rights for the requested resource",
  404: "Not Found: Requested resource can not be found by server",
  500: "Internal Server Error: Server has encountered some internal error",
  503: "Server Unavailable: Server is not availble to handle the request",
  504: "Gateway Timeout: Server cannot get a response in time",
};

const generateMessage = (code) => {
  const message = responseMessages.hasOwnProperty(code)
    ? responseMessages[code]
    : null;
  return message;
};

module.exports = function (req, res, next) {
  res.reply = (responseJson) => {
    const data =
      typeof responseJson.data === "undefined" ? {} : responseJson.data;
    const statusCode =
      typeof responseJson.statusCode === "undefined"
        ? 200
        : responseJson.statusCode;
    let message =
      typeof responseJson.message === "undefined"
        ? generateMessage(statusCode)
        : responseJson.message;

    const statusCodeText = HttpStatus.getStatusText(statusCode);
    message = message !== null ? message : statusCodeText;
    const result = {
      success: false,
      responseStatus: statusCodeText.toUpperCase().split(" ").join("_"),
      message,
    };
    if (statusCode >= 300) {
      return res
        .status(statusCode)
        .send({ ...result, success: false, error: data });
    }
    return res.status(statusCode).send({ ...result, success: true, data });
  };
  next();
};
