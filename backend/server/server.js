import express from "express";
const PORT = process.env.PORT || 3001;
const app = express();
import database from "../server/databaseHandler.js";
import MailHandler from "../server/mailHandler.js";

const db = new database();
db.connect();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mail = new MailHandler();
// mail.sendEmail("Piotr", "Wendt");

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// TESTING REGISTER AND LOGIN FORM
app.post("/api/users", async (req, res) => {
  const data = req.body;
  switch (data.method) {
    case "register":
      try {
        const result = await handleRegister(data);
        return res.status(201).send({ result });
      } catch {
        return res.status(500).send();
      }
    case "sign-in":
      try {
        const result = await handleLogin(data);
        return res.status(201).send({ result });
      } catch {
        return res.status(500).send();
      }
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const handleLogin = async (data) => {
  return await db.handleAuthentication(data.email, data.password);
};
const handleRegister = async (data) => {
  return await db.addUser(
    data.first_name,
    data.last_name,
    data.email,
    data.password
  );
};
