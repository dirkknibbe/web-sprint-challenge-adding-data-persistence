// build your `Task` model here
const db = require("../../data/dbConfig.js");

const getById = (task_id) => {
  return db("tasks").where("task_id", task_id).first();
};

function getTasks() {
  return db("tasks");
}

async function add(task) {
  const [task_id] = await db("tasks").insert(task);
  return getById(task_id);
}

module.exports = { getTasks, add, getById };
