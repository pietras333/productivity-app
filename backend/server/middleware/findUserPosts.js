import postsModel from "../models/postModel.js";

const findUserPosts = async (req, res, next) => {
  const user = res.user[0];
  const id = user._id.toString().replace(/['"]+/g, "");
  console.log(id);
  let posts = await postsModel.find({
    userId: id,
  });
  const selected = ["username", "topic", "paragraph"];
  const filterProperties = (array, data) =>
    array.reduce(
      (a, x) => (data[x] !== undefined ? { ...a, [x]: data[x] } : a),
      {}
    );

  const collected = posts.map((el) => {
    return filterProperties(selected, el);
  });

  res.posts = collected;

  return next();
};

export default findUserPosts;
