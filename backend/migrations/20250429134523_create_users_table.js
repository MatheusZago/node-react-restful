exports.up = function(knex) {
  return knex.schema.hasTable('users').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('users', function(table) {
        table.increments('id').primary(); 
        table.string('name').notNullable(); 
        table.string('email').notNullable().unique(); 
        table.timestamps(true, true); 
      });
    }
  });
};
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };