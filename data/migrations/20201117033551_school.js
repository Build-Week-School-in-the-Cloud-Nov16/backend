exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users.increments();
    
          users.string('password', 255)
          .notNullable()
          users.string('role', 255)
          .notNullable()
          users.string('username', 255)
          .unique()
          .notNullable()
          .index();
          users
          .string('email', 255)
          .unique()
          .notNullable()
          .index(); 
          
          users.string('first_name', 255)
          users.string('last_name', 255)
          users.string('country', 255)
          users.string("timezone", 128)
          users.timestamps(true, true)
      })
    
      .createTable('tasks', tbl => {
        tbl.increments()
        tbl.string('title', 255)
          .notNullable()
        tbl.string('description')
          .notNullable()
        tbl.boolean('complete')
          .notNullable()
          .defaultTo(false);
        tbl.integer('assigned_by')
          .unsigned()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
        tbl.integer('assigned_to')
          .unsigned()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
        tbl.timestamps(true, true)
      })
      .createTable('meetings', tbl => {
        tbl.increments()
        tbl.date('date')
          .notNullable()
        tbl.time('time')
          .notNullable()
        tbl.integer('duration')
          .notNullable()
        tbl.boolean('available')
          .notNullable()
          .defaultTo(true);
        tbl.integer('volunteer_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
        tbl.integer('student_id')
          .unsigned()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
        tbl.timestamps(true, true)
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('meetings')
      .dropTableIfExists('tasks')
      .dropTableIfExists('users')
  };