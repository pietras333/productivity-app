import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  userID: String,
  username: String,
  topic: String,
  paragraph: String,
});
const postsModel = new mongoose.model("Posts", postSchema);
export default postsModel;
