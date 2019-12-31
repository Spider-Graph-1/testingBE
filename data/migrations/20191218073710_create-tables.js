
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('username', 255).notNullable();
            tbl.string('password', 255).notNullable();
            tbl.string('name', 255).notNullable();
            tbl.string('email', 255).unique().notNullable();
        })
        .createTable('graphs', tbl => {
          tbl.increments();
          tbl.string('graph_name', 255).notNullable();
          tbl.jsonb('graph_info').notNullable();
          tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        })
  )
};

exports.down = function(knex) {
  return (
      knex.schema
        .dropTableIfExists('graphs')  
        .dropTableIfExists('users')
  )
};
