const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const database = require("../server/databaseHandler.js");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
database.connect();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// TESTING REGISTER AND LOGIN FORM
app.post("/api/users", async (req, res) => {
  const data = req.body;
  switch (data.method) {
    case "register":
      return handleRegister(data);
    case "sign-in":
      return handleLogin(data);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const handleLogin = (data) => {
  console.log("login data ===", data);
};
const handleRegister = (data) => {
  console.log("register data ===", data);
};