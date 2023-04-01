import { mongoose } from "mongoose";
import config from "../server/config.json" assert { type: "json" };
import UserModel from "../server/models/userModel.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import MailHandler from "../server/mailHandler.js";

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
      const verificationToken = await this.generateVerificationToken();
      const user = new UserModel({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: await bcrypt.hash(pass, 10),
        verified: false,
        verificationToken: verificationToken,
      });
      const mail = new MailHandler();
      mail.accountActivation(email, firstName, verificationToken);
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
      if (
        (await bcrypt.compare(password, hashedpassword)) &&
        user[0].verified
      ) {
        await this.authorizeUser(email);
        const token = user[0].authorizationToken;
        return { token: token };
      } else {
        return "authentication error";
      }
    }
  };

  verifyUser = async (token) => {
    const user = await UserModel.find({ verificationToken: token });
    await UserModel.updateOne(
      { email: user[0].email },
      { $set: { verified: true } }
    );
  };

  generateVerificationToken = async () => {
    const base = crypto.randomBytes(20).toString("hex");
    return await bcrypt.hash(base, 10);
  };

  authorizeUser = async (email) => {
    const user = await UserModel.find({ email: email });
    await UserModel.updateOne(
      { email: user[0].email },
      {
        $set: {
          authorized: true,
          authorizationToken: await this.generateAuthorizationToken(),
        },
      }
    );
  };

  generateAuthorizationToken = async () => {
    const base = crypto.randomBytes(22).toString("hex");
    return await bcrypt.hash(base, 10);
  };
}

export default database;
