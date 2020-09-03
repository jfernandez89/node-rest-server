// Config //
require("./config");

// Express //
const express = require("express");
const app = express();

// Body parser //
const bodyParser = require("body-parser");

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// GET //
app.get("/user", function (req, res) {
  res.json("Get user");
});

// POST //
app.post("/user", function (req, res) {
  let body = req.body;

  if (body.name === undefined) {
    res.status(400).json({
      done: false,
      message: "The name parameter is mandatory",
    });
  } else {
    res.json(body);
  }
});

// PUT //
app.put("/user/:id", function (req, res) {
  let id = req.params.id;
  res.json({ id });
});

// DELETE //
app.delete("/user", function (req, res) {
  res.json("Delete user");
});

// PORT //
app.listen(process.env.PORT, () => {
  console.log("Listen port: ", process.env.PORT);
});
