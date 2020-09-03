// Port config //
require("./Configuration/config");

const mongoose = require("mongoose");
const express = require("express");

// Express //
const app = express();

// Body parser //
const bodyParser = require("body-parser");

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// CONTROLLERS //
app.use(require("./Controllers/userController"));

// DATABASE //
mongoose.connect("mongodb://localhost:27017/express", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("Connection error");
});

db.once("open", () => {
  console.log("Database connected!");
});

// PORT //
app.listen(process.env.PORT, () => {
  console.log("Listen port: ", process.env.PORT);
});
