// build your `/api/tasks` router here
const express = require("express");
const taskModel = require("./model");
const taskRouter = express.Router();

taskRouter.get("/", (req, res, next) => {
  taskModel
    .getTasks()
    .then((tasks) => {
      console.log(tasks);
      //   if (tasks.task_completed === 0) {
      //     return false;
      //   }
      res.json(tasks);
    })
    .catch(next);
});

taskRouter.post("/", (req, res, next) => {
  const newTask = req.body;
  taskModel
    .add(newTask)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});

module.exports = taskRouter;
