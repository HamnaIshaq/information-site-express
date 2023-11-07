const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.get("/", (req, res) => {
  console.log("/home.html");
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/about", (req, res) => {
  console.log("/about.html");
  res.sendFile(path.join(__dirname, "/views/about.html"));
});

app.get("/contact-me", (req, res) => {
  console.log("/contact-me.html");
  res.sendFile(path.join(__dirname, "/views/contact-me.html"));
});

// serve 404 page when user tries to access a page not present
app.get("*", (req, res) => {
  console.log("/404.html");
  res.sendFile(path.join(__dirname, "/views/404.html"));
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
