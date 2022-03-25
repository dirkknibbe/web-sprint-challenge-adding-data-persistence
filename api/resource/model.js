// build your `Resource` model here
const db = require("../../data/dbConfig.js");

function getResources() {
  return db("resources");
}

function add(resource) {
  return db("resources").insert(resource);
}

module.exports = { getResources, add };
