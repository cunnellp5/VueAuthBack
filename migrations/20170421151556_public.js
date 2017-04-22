exports.up = function(knex, Promise) {
  return knex.schema.createTable("public", function(table){
    table.increments();
    table.text("name");
    table.text("sponsor");
    table.text("seedFund");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("public");
};
