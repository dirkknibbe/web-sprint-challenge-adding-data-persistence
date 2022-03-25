//  - [ ] `project_id` - primary key
//   - [ ] `project_name` - required
//   - [ ] `project_description` - optional
//   - [ ] `project_completed` - the database defaults it to `false` (integer 0) if not provided

exports.up = function (knex) {
  return (
    knex.schema
      .createTable("projects", (tbl) => {
        tbl.increments("project_id");
        tbl.string("project_name", 100).notNullable();
        tbl.string("project_description");
        tbl.boolean("project_completed").defaultTo(false);
      })
      //   - [ ] `resource_id` - primary key
      //   - [ ] `resource_name` - required and unique
      //   - [ ] `resource_description` - optional
      .createTable("resources", (tbl) => {
        tbl.increments("resource_id");
        tbl.string("resource_name", 100).notNullable().unique();
        tbl.string("resource_description");
      })
      //   - [ ] `task_id` - primary key
      //   - [ ] `task_description` - required
      //   - [ ] `task_notes` - optional
      //   - [ ] `task_completed` - the database defaults it to `false` (integer 0) if not provided
      //   - [ ] `project_id` - required and points to an actual `project_id` in the `projects` table
      .createTable("tasks", (tbl) => {
        tbl.increments("task_id");
        tbl.string("task_description", 300).notNullable();
        tbl.string("task_notes", 500);
        tbl.boolean("task_completed").defaultTo(false);
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("project_id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })

      .createTable("project_resources", (tbl) => {
        tbl.increments("project_resources_id");

        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("project_id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");

        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("resource_id")
          .inTable("resources")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");

        tbl.primary(["project_id", "resource_id"]);
      })
  );
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
