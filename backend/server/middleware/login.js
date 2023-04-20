import userModel from "../models/userModel.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const login = async (req, res, next) => {
  await mongoose.connect(process.env.MONGO_URI);
  const user = await userModel.find({ email: req.body.email });
  if (user.length === 0) {
    return res.status(404).send();
  }
  const passMatch = await bcrypt.compare(req.body.password, user[0].password);
  const verified = user[0].verified;

  if (!passMatch || !verified) {
    return res.status(401).send();
  }
  return next();
};
export default login;
