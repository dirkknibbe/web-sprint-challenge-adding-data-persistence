// build your `Project` model here

const db = require("../../data/dbConfig.js");

const getById = (project_id) => {
  return db("projects").where("project_id", project_id).first();
};

function getProjects() {
  return db("projects");
}

async function add(project) {
  const [project_id] = await db("projects").insert(project);
  return getById(project_id);
}

module.exports = { getProjects, add, getById };
