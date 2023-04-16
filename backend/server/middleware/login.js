import userModel from "../models/userModel.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const login = async (req, res, next) => {
  await mongoose.connect(process.env.MONGO_URI);
  const user = await userModel.find({ email: req.body.email });
  if (user.length != 0) {
    console.log(user[0]);
    const passMatch = await bcrypt.compare(req.body.password, user[0].password);
    const verified = user[0].verified;
    if (!passMatch || !verified) {
      res.status(401).send({ Message: "Wrong data or user not verified" });
    } else {
      next();
    }
  } else {
    res.status(404).send({ Message: "User doesn't exist" });
  }
};
export default login;
