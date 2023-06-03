import mongoose from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto";
import userModel from "../models/userModel.js";
import mailHandler from "../mailHandler.js";

const handleVerToken = async () => {
  const base = crypto.randomBytes(20).toString("hex");
  return (await bcrypt.hash(base, 10)).replace(/\//g, "_").replace(/\+/g, "-");
};

const register = async (req, res, next) => {
  await mongoose.connect(process.env.MONGO_URI);
  const exists = await userModel.find({ email: req.body.email });
  if (exists.length != 0) {
    return res.status(403).send();
  }
  const verToken = await handleVerToken();
  const user = new userModel({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email.toLowerCase(),
    password: await bcrypt.hash(req.body.password, 10),
    verified: false,
    verificationToken: verToken,
  });
  const mail = new mailHandler();
  mail.accountActivation(req.body.email, req.body.first_name, verToken);
  await user.save();
  return next();
};

export default register;
