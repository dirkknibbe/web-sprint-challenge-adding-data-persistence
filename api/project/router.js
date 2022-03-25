// build your `/api/projects` router here

const express = require("express");
const projectModel = require("./model");
const projectRouter = express.Router();

projectRouter.get("/", (req, res, next) => {
  projectModel
    .getProjects()
    .then((projects) => {
      projects.map((project) => {
        if (project.project_completed === 0) {
          project.project_completed = false;
        } else if (project.project_completed === 1)
          project.project_completed = true;
      });
      return projects;
    })
    .then((projects) => {
      res.json(projects);
    })
    .catch(next);
});

projectRouter.post("/", (req, res, next) => {
  const newProject = req.body;

  projectModel
    .add(newProject)

    .then((proj) => {
      if (proj.project_completed === 0) {
        proj.project_completed = false;
      } else if (proj.project_completed === 1) {
        proj.project_completed = true;
      }
      return proj;
    })
    .then((proj) => {
      res.json(proj);
    })
    .catch(next);
});

module.exports = projectRouter;
