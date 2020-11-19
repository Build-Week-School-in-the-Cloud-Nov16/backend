

endpoints

POST REQUESTS
/api/auth/register
required fields
{ 
  "email": "uniquePassword@email.com",
  "password": "password",
  "username": "uniqueUsername",
  "role": "role"
}



/api/auth/login
required fields
will return a token for authorization, the token will expire in 1 day
{
    username:
    password:
}


GET REQUESTS

/api/users
returns ALL USERS


/api/users/:id
return specific User ID

/api/users/filter:query

filter Users by a specific field 
EX: ?role= admin filters all admins



PUT
/api/users/:id
replace a specific field from an existing users

delete
/api/users/:id
Delete the specified user


/api/tasks
Get All Tasks

 /api/tasks/:id
Get Task By ID

POST 
/api/tasks
Add Task

PUT 
/api/tasks/:id
Update Specified Task

DELETE 
/api/tasks/:id
Delete Task