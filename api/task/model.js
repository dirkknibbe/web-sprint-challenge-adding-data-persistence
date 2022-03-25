// build your `Task` model here
const db = require("../../data/dbConfig.js");

const getById = (task_id) => {
  return db("tasks").where("task_id", task_id).first();
};

function getTasks() {
  return db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_completed",
      "t.task_description",
      "t.task_notes",
      "p.project_name",
      "p.project_description"
    );
}

async function add(task) {
  const [task_id] = await db("tasks").insert(task);
  return getById(task_id);
}

module.exports = { getTasks, add, getById };
