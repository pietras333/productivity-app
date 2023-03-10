const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json({ type: "application/*+json" }));
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/api", (req, res) => {
  console.log("req.body ===", req.body);
  res.send("Got it");
});

app.get("/api/users", (req, res) => {
  res.json({ users: { userone: { name: "Peter", surname: "Griffin" } } });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
