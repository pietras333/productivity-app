import { mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  verified: Boolean,
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
