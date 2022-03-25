// build your `Resource` model here
const db = require("../../data/dbConfig.js");

const getById = (resource_id) => {
  return db("resources").where("resource_id", resource_id).first();
};

function getResources() {
  return db("resources");
}

async function add(resource) {
  const [resource_id] = await db("resources").insert(resource);
  return getById(resource_id);
}

module.exports = { getResources, add, getById };
