import express from "express";
const PORT = process.env.PORT || 3001;
const app = express();
import database from "../server/databaseHandler.js";

const db = new database();
db.connect();

// database.addUser("J", "Cole").then((data) => {
//   console.log(data);
// });
// database.handleAuthentication("J", "Cole").then((data) => {
//   console.log(data);
// });
// database.findUser("Agata").then((data) => {
// });
// database.checkUser("Agata", "as").then((response) => {
//   console.log(response);
// });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
        return res.status(201).send(result);
      } catch {
        return res.status(500).send();
      }
    case "sign-in":
      try {
        const result = await handleLogin(data);
        return res.status(201).send(result);
      } catch {
        return res.status(500).send();
      }
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const handleLogin = async (data) => {
  return await db.handleAuthentication(data.username, data.password);
};
const handleRegister = async (data) => {
  return await db.addUser(data.username, data.password);
};
