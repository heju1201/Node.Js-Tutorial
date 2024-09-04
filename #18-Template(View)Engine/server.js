const express = require("express");
// const path = require("path");
const app = express();
const port = 8081;

// config template engine
app.set("views", "./src/views/");
// app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/abc", (req, res) => {
  res.send("check ABC");
});
app.get("/test", (req, res) => {
  // res.send("<h1> ha ha ha </h1>");
  res.render("sample.ejs");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
