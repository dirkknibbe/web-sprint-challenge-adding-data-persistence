// build your `/api/projects` router here

const express = require("express");
const projectModel = require("./model");
const projectRouter = express.Router();

projectRouter.get("/", (req, res, next) => {
  projectModel
    .getProjects()
    .then((projects) => {
      //   if (projects.project_completed === 0) {
      //     return false;
      //   }
      res.json(projects);
    })
    .catch(next);
});

projectRouter.post("/", (req, res, next) => {
  const newProject = req.body;
  projectModel
    .add(newProject)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(next);
});

module.exports = projectRouter;
