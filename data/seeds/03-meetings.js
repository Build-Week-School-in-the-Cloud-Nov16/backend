
exports.seed = function(knex) {
    
      // Inserts seed entries
      return knex('meetings').insert([
        {
          id: 111111111111,
          date: '11/15/2020',
          time: '18:00',
          duration: '30',
          volunteer_id: '222222222222'
        },
        {
          id: 222222222222,
          date: '11/15/2020',
          time: '18:30',
          duration: '30',
          volunteer_id: '222222222222'
        },
        {
          id: 33333333333,
          date: '11/15/2020',
          time: '19:00',
          duration: '30',
          volunteer_id:'22222222222'
        }]
        .then(()=>console.log("\n== Seed data for roles table added. ==\n")));

};
