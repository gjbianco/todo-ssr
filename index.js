const express = require("express");

const port = Number(process.env.PORT || 8080);

const app = express();

app.set("view engine", "pug");

app.get("/", function (req, res) {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.listen(port, () => {
  console.log("Express server started on port: " + port);
});
