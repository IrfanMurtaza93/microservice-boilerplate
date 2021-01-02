// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
import { User } from "../../models";

export const signup = async (req) => {
  const { name, email, role, password } = req.body;
  const user = await User.findOne({
    where: { email },
  });
  if (user) {
    throw new Error("User already exists with same email");
  }
  const payload = {
    email,
    name,
    role,
    password,
  };

  const newUser = await User.create(payload);
  return newUser;
};
