exports.up = function(knex) {
  return knex.schema.createTable("contacts", table => {
    table.increments("id").primary();
    table.string("firstName", 255).notNullable();
    table.string("lastName", 255).notNullable();
    table.string("email", 255);
    table.string("company", 255);
    table.integer("phone", 40);
    table.datetime("create_date", { precision: 6 }).defaultTo(knex.fn.now(6));
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("contacts");
};
