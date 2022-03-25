// build your `Project` model here

const db = require("../../data/dbConfig.js");

function getProjects() {
  return db("projects");
}

function add(project) {
  return db("projects").insert(project);
}

module.exports = { getProjects, add };
