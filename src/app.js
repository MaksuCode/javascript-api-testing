const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({
    message: "Server is healthy",
  });
});

app.get("/users", (req, res) => {
  res.status(200).json({
    users: [
      { id: 1, name: "John" },
      { id: 2, name: "Doe" },
    ],
  });
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.status(200).json({
    id: userId,
    name: "John",
  });
});

module.exports = app;
