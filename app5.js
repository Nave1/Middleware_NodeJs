// Created By Yarden Halely & Nave Shitrit
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

function isAdmin(req, res, next) {
  const user = req.query.user;
  if (user === "admin") next();
  else {
    res.send("Not Authorized");
  }
}
app.get("/", (req, res) => {
  res.send("Welcome to my Home Page !");
});
app.get("/admin", isAdmin, (req, res) => {
  res.send("Welcome to Management Page!");
});
app.get("/public", (req, res) => {
  res.send("This is a public page");
});
app.listen(port, () => {
  console.log(`Users API listening on port ${port}`);
});
