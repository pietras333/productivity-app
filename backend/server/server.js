import express from "express";
const PORT = process.env.PORT || 3001;
const app = express();

import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";
import register from "./middleware/register.js";
import userModel from "./models/userModel.js";
import login from "./middleware/login.js";
import verification from "./middleware/verification.js";
import authorize from "./middleware/authorize.js";
import postsModel from "./models/postModel.js";
import findUserPosts from "./middleware/findUserPosts.js";
import taskManager from "./middleware/taskManager.js";

dotenv.config();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api", authorize, findUserPosts, async (req, res) => {
  res.status(201).send(res.posts);
});

app.post("/api/tasks/subtasks", taskManager.subtasks, (req, res) => {
  res.status(200).send(req.data);
});

app.get("/api/verify/:token", verification, (req, res) => {
  res.status(201).send();
});

app.post("/main", authorize, (req, res) => {
  res.status(200).send();
});

app.post("/api/register", register, async (req, res) => {
  res.status(201).send({
    Message: "User created",
  });
});

app.post("/api/login", login, async (req, res) => {
  const user = await userModel.find({ email: req.body.email });
  console.log(user);
  const token = jwt.sign({ email: user[0].email }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });
  await userModel.updateOne(
    { email: req.body.email },
    {
      $set: {
        authorizationToken: token,
      },
    }
  );
  res.status(200).send({
    Headers: {
      Authorization: token,
    },
    Message: "Succesfully logged in",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
