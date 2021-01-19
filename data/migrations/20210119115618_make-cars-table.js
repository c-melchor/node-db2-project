exports.up = function(knex) {
  //vin,make,model,milage.id,clean(not needed)
  return knex.schema.createTable("cars", table => {
    table.increments("car_id");
    table.string("name", 100).notNullable();
    table
      .string("vin_number")
      .notNullable()
      .unique();
    table.text("make", 100).notNullable();
    table.text("model", 100).notNullable();
    table.string("milage").notNullable();
    table.boolean("clean");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("cars");
};
