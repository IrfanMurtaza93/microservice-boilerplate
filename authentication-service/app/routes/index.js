import express from "express";

const router = express.Router();

router.get("/", async function (req, res) {
  return res.send({ message: "service is working fine" });
});

module.exports = router;
