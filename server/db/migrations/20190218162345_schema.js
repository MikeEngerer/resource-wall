
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Users', table => {
  	table.increments();
  	table.string('name');
  	table.string('email')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Users')
};
