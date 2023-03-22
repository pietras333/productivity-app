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

  addUser = async (firstName, lastName, email, pass) => {
    const existance = await this.handleUserExistance(email);
    if (existance) {
      return "Email taken";
    } else {
      const user = new UserModel({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: await bcrypt.hash(pass, 10),
      });
      await user.save();
      return "User created";
    }
  };

  findUser = async (email) => {
    const user = await UserModel.find({ email: email });
    return user;
  };

  checkUser = async (email, password) => {
    const user = await this.findUser(email);
    if (user[0].password != password) {
      return false;
    }
    return true;
  };

  handleUserExistance = async (email) => {
    const result = await this.findUser(email);
    if (result.length != 0) {
      return true;
    }
    return false;
  };

  handleAuthentication = async (email, password) => {
    const exists = await this.handleUserExistance(email);
    if (!exists) {
      return "User doesn't exist";
    } else {
      const user = await this.findUser(email);
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
