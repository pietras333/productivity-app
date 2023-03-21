import { mongoose } from "mongoose";
import config from "../server/config.json" assert { type: "json" };
import UserModel from "../server/models/userModel.js";
import bcrypt from "bcrypt";

class database {
  connect = async () => {
    try {
      await mongoose.connect(config.uri);
      console.log("Connected to MongoDB");
    } catch (err) {
      console.log("Error ===", err);
    }
  };

  echo = () => {
    console.log("Hello from database handler");
  };

  addUser = async (username, pass) => {
    const existance = await this.handleUserExistance(username);
    if (existance) {
      return "Username taken";
    } else {
      const user = new UserModel({
        name: username,
        password: await bcrypt.hash(pass, 10),
      });
      await user.save();
      return "Username created";
    }
  };

  findUser = async (username) => {
    const user = await UserModel.find({ name: username });
    return user;
  };

  checkUser = async (username, password) => {
    const user = await this.findUser(username);
    if (user[0].password != password) {
      return false;
    }
    return true;
  };

  handleUserExistance = async (username) => {
    const result = await this.findUser(username);
    if (result.length != 0) {
      return true;
    }
    return false;
  };

  handleAuthentication = async (username, password) => {
    const exists = await this.handleUserExistance(username);
    if (!exists) {
      return "User doesn't exist";
    } else {
      const user = await this.findUser(username);
      const hashedpassword = user[0].password;
      if (await bcrypt.compare(password, hashedpassword)) {
        return "authentication completed";
      } else {
        return "authentication error";
      }
    }
  };
}

export default database;
