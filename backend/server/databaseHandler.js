const { MongoClient } = require("mongodb");
const { mongoose } = require("mongoose");
const config = require("../server/sensitive.json");
const UserModel = require("../server/models/userModel.js");
const userModel = require("../server/models/userModel.js");

module.exports.connect = async () => {
  try {
    await mongoose.connect(config.uri);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error ===", err);
  }
};

module.exports.echo = () => {
  console.log("Hello from database handler");
};

module.exports.addUser = async (us, pass) => {
  const user = new UserModel({
    name: us,
    password: pass,
  });
  await user.save();
};

module.exports.findUser = async (us) => {
  const user = await userModel.find({ name: us });
  return user;
};

module.exports.checkUser = async (us, pass) => {
  const user = await this.findUser(us);
  if (user[0].password != pass) {
    return false;
  }
  return true;
};
