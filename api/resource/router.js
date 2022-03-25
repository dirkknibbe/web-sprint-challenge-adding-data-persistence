// build your `/api/resources` router here
const express = require("express");
const resourceModel = require("./model");
const resourceRouter = express.Router();

resourceRouter.get("/", (req, res, next) => {
  resourceModel
    .getResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch(next);
});

resourceRouter.post("/", (req, res, next) => {
  const newResource = req.body;
  resourceModel
    .add(newResource)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});

module.exports = resourceRouter;
