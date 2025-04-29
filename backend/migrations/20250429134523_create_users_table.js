exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary(); // ID auto-incrementável
      table.string('name').notNullable(); // Nome do usuário
      table.string('email').notNullable().unique(); // Email único
      table.timestamps(true, true); // created_at e updated_at automáticos
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };