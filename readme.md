# Todo List

A simple todo list app that allows you to create a todo item, update, delete etc.

## Getting Started
```
$ git clone https://github.com/CS601-F18/side-project-Ni4991.git
```
### Prerequisites

Install and configure [PostgreSQL](https://www.postgresql.org/), and change data in config.json.
We are only using development, so customize that to your username and password, and database name.

Also install [Sequelize](http://docs.sequelizejs.com/). This is an ORM that will interface with the Postgres database for us.

Finally install [Postman](https://learning.getpostman.com/docs/postman/launching_postman/navigating_postman/). Since this project focus on backend, we use postman to test the api.

### Installing

Inside the root directory where you git cloned, install dependencies.

```
$ npm install
```

then run the app by executing

```
$ npm run start:dev
```
Open up Postman, send a GET request to /api

```
$ npm run start:dev
```

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

To test database,
```
$ psql
```
to get into postgres. 

Switch database to todos-dev.
```
$ \c todos-dev;
```
View all tables.
```
$ \dt 
```
Go to a specific table.
```
$ \d "[table name]"
$ select * from [table name];
```

To test correctness of HTTP request/response, use postman.
1. send a GET request to /api => should see the message 'Welcome to the Todos API!'
2. send a GET request to /api/todos => should see a list of all todos
3. send a POST request to /api/todos => should see a new todo
body format:
```
{"title":"second-todo"}
```
4. send a POST request to /api/todos/:todoId/items => should see a new todo item. Must replace :todoId with a number.
body format:
```
{"content":"second todo item, inside the fitst-todo"}
```
5. send a GET request to /api/todos/:todoId => should see the designated todo. Must replace :todoId with a number.
6. send a PUT request to /api/todos/:todoId => should see updated todo
body format:
```
{"title":"UPDATED fitst-todo"}
```
7. send a DELETE request to /api/todos/:todoId => should see :todoId deleted. Must replace :todoId with a number.


## Built With

* [NodeJS](https://nodejs.org/en/) - server
* [Express](https://expressjs.com/) - web framework
* [PostgreSQL](https://www.postgresql.org/) - database
* [Sequelize](http://docs.sequelizejs.com/) - ORM for postgres
* [Postman](https://www.getpostman.com/) - api tester

