// build your `/api/tasks` router here
const express = require("express");
const taskModel = require("./model");
const taskRouter = express.Router();

taskRouter.get("/", (req, res, next) => {
  taskModel
    .getTasks()
    .then((tasks) => {
      tasks.map((task) => {
        if (task.task_completed === 0) {
          task.task_completed = false;
        } else if (task.task_completed === 1) {
          task.task_completed = true;
        }
      });
      return tasks;
    })
    .then((editedTask) => {
      res.json(editedTask);
    })
    .catch(next);
});

taskRouter.post("/", (req, res, next) => {
  const newTask = req.body;

  taskModel
    .add(newTask)
    .then((task) => {
      if (task.task_completed === 0) {
        task.task_completed = false;
      } else if (task.task_completed === 1) {
        task.task_completed = true;
      }
      return task;
    })
    .then((task) => {
      res.json(task);
    })
    .catch(next);
});

module.exports = taskRouter;
