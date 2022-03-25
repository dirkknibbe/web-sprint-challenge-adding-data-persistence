// build your server here and require it from index.js

const express = require("express");

const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

const server = express();

server.use(express.json());

server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

server.use("*", (req, res) => {
  res.json({ serverfileapi: "is wired" });
});

module.exports = server;
