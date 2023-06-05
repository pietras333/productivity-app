import mongoose from "mongoose";
import userModel from "../models/userModel.js";

const verification = async (req, res, next) => {
  await mongoose.connect(process.env.MONGO_URI);
  const user = await userModel.find({
    verificationToken: req.params.token,
  });
  if (user.length === 0) {
    return res.status(404).send();
  }
  await userModel.updateOne(
    { email: user[0].email },
    { $set: { verified: true } }
  );
  return next();
};

export default verification;
