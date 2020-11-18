exports.seed = async function(knex, Promise) {
  
  return knex('tasks').insert([
    {
      id: 11111,
      title: 'task one title',
      description: 'task one description',
    },
    {
      id: 22222,
      title: 'task two title',
      description: 'task two description',
    },
    {
      id: 33333,
      title: 'task three ',
      description: 'task three',
    }
  ])
}