import mongoose from "mongoose";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const authorize = async (req, res, next) => {
  await mongoose.connect(process.env.MONGO_URI);
  if (req.headers.authorization.split(" ").length <= 1) {
    return res.status(401).send();
  }
  const token = req.headers.authorization.split(" ")[1];
  const data = jwt.decode(token, process.env.JWT_SECRET);
  if (data === null) {
    return res.status(401).send();
  }
  const user = await userModel.find({ _id: data.id });
  const usertoken = user[0].authorizationToken;
  if (usertoken === token) {
    res.user = user;
    return next();
  }
  return res.status(401).send();
};
export default authorize;
