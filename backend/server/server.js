import express from "express";
const PORT = process.env.PORT || 3001;
const app = express();
import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";
import register from "./middleware/register.js";
import userModel from "./models/userModel.js";
import login from "./middleware/login.js";

dotenv.config();
db.connect();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/api/verify/:id", (req, res) => {
  const token = req.params.id;
  db.verifyUser(token);
});

app.get("/main", (req, res) => {
  res.json({ message: "hello world" });
});

app.post("/api/register", register, async (req, res) => {
  const user = await userModel.find({ email: req.body.email });
  console.log(user);
  const token = jwt.sign({ id: user[0]._id }, process.env.JWT_SECRET, {
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
  res.status(201).send({
    Headers: {
      Authorization: token,
    },
    Message: "User created",
  });
});

app.post("/api/login", login, async (req, res) => {
  const user = await userModel.find({ email: req.body.email });
  const token = jwt.sign({ id: user[0]._id }, process.env.JWT_SECRET, {
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
  res.status(201).send({
    Headers: {
      Authorization: token,
    },
    Message: "Succesfully logged in",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
