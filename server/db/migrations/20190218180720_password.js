
exports.up = function(knex, Promise) {
  return knex.schema.table('Users', table => {
  	table.string('password')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('Users', table => {
  	table.dropColumn('password')
  })
};
