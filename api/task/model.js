// build your `Task` model here
const db = require("../../data/dbConfig.js");

function getTasks() {
  return db("tasks");
}

function add(task) {
  return db("tasks").insert(task);
}

module.exports = { getTasks, add };
