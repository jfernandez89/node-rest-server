// Express //
const express = require("express");
const app = express();
const User = require("../Models/User");
const bcrypt = require("bcrypt");

// GET //
app.get("/user", function (req, res) {
  res.json("Get user");
});

// POST //
app.post("/user", function (req, res) {
  let body = req.body;

  let user = new User({
    name: body.name,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    image: body.image,
    role: body.role,
    state: body.state,
    google: body.google,
  });

  user.save((error, userDB) => {
    if (error) {
      return res.status(400).json({
        done: false,
        error,
      });
    }

    // doesn't show the password to the user
    userDB.password = null;

    res.json({
      done: true,
      user: userDB,
    });
  });
});

// PUT //
app.put("/user/:id", function (req, res) {
  let id = req.params.id;
  let body = req.body;

  // Removes these properties, to avoid update of them
  delete body.password;
  delete body.google;

  // Returns the updated user
  User.findByIdAndUpdate(
    id,
    body,
    { new: true, runValidators: true },
    (error, userDB) => {
      if (error) {
        return res.status(400).json({
          done: false,
          error,
        });
      }

      res.json({
        done: true,
        userDB,
      });
    }
  );
});

// DELETE //
app.delete("/user", function (req, res) {
  res.json("Delete user");
});

module.exports = app;
