const { MongoClient } = require("mongodb");
const { mongoose } = require("mongoose");
const config = require("../server/sensitive.json");

module.exports.connect = async () => {
  try {
    await mongoose.connect(config.uri);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error ===", err);
  }
};

module.exports.echo = () => {
  console.log("Hello from database");
};
