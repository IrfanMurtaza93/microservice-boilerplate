const Joi = require("joi");

export const signup = {
  body: {
    name: Joi.string().required(),
    role: Joi.number().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
};
