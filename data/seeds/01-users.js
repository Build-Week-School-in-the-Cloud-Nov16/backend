  
exports.seed = function(knex) {
  const roles = [
    {
      id: 111111111111,
      username: 'admin',
      password: 'adminpassword',
      email: 'admin@email.com',
      role: 'admin',
    },
    {
      id: 222222222222,
      username: 'volunteer',
      password: 'volunteerpassword',
      email: 'volunteer@email.com',
      role: 'volunteer',
    },
    {
      id: 33333333333,
      username: 'student',
      password: 'studentpassword',
      email: 'student@email.com',
      role: 'student',
    }
  ]
  return knex('users').insert(roles).then(()=>{console.log("user table added")})
}
