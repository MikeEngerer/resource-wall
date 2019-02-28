
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Posts', table => {
    table.increments('id')
    table.string('type')
    table.string('title')
    table.string('content')
    table.string('link')
    table.string('image')
    table.integer('user_id').references('id').inTable('Users')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Posts')
};
