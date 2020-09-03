// Express //
const express = require("express");
const app = express();

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

module.exports = app;
