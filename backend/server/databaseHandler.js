const { MongoClient } = require("mongodb");
const { mongoose } = require("mongoose");

const uri =
  "mongodb+srv://pietras333:Ffcd08edr2vx3j@wendt.bpnygwf.mongodb.net/?retryWrites=true&w=majority";

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
