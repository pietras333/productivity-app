import mongoose from "mongoose";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";

const authorize = async (req, res, next) => {
  await mongoose.connect(process.env.MONGO_URI);
  const token = req.headers.authorization.split(" ")[1];
  const data = jwt.decode(token, process.env.JWT_SECRET);
  const user = await userModel.find({ _id: data.id });
  const usertoken = user[0].authorizationToken;
  if (usertoken === token) {
    return next();
  } else {
    res.status(401).send({ Message: "User authorization failed" });
  }
};
export default authorize;
