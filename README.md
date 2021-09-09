# Todo Service API in JSON

Simple todo NodeJS API with JSON.
You can Create, Read, Update and Delete todo.
A todo simply contains a title, a description, an isDone field and an image.

## Todo (lol)

- [x] Error handling
- [x] Deployment on a server
- [] Authentication using an Auth provider (Auth0)
- [] Seting up test (models, controllers)
- [] CI/CD using Github Action
- [] Consume the API
  - [] CLI
  - [] Web
  - [] Application

## Endpoint

Create a todo

    POST /todos

Read all todos

    GET /todos

Read a todo

    GET /todos/:id

Update a todo

    PUT /todos/:id

Delete a todo

    DELETE /todos/:id

## Deployment

Currently deployed on Heroku at this address:
https://todo-services-nodejs.herokuapp.com/

## Other

NodeJS version

    16.9.0

NPM version

    7.21.1
