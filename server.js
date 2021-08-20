var express = require("express");

const path = require("path");
var PORT = process.env.PORT || 3001;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(PORT, function () {
  console.log(`API listening on port: ${PORT}`);
});
