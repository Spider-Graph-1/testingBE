# Back-End

Heroku link:

https://spidergraph-backend.herokuapp.com/

Endpoints:

### POST to /api/auth/register

`{
    "username": "string", // notNullable
    "password": "", // notNullable
    "name": "string", // notNullable
    "email": "string" // unique, notNullable
}`