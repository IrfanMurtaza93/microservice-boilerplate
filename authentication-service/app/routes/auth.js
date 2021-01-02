import express from "express";
import validate from "express-validation";

import * as authValidator from "../controllers/auth/auth.validator";
import * as authController from "../controllers/auth/auth.controller";
const router = express.Router();

router.post(
  "/signup",
  validate(authValidator.signup),
  async (req, res, next) => {
    try {
      const newuser = await authController.signup(req);
      return res.reply({
        data: newuser,
      });
    } catch (error) {
      return next(error);
    }
  }
);

module.exports = router;
