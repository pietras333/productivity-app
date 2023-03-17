const { MongoClient } = require("mongodb");
const { mongoose } = require("mongoose");

const uri =
  "***REMOVED***";

module.exports.connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error ===", err);
  }
};

module.exports.echo = () => {
  console.log("Hello from database");
};
