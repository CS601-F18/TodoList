const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));
  app.get('/api/todos', todosController.list);
  app.post('/api/todos', todosController.create);
  app.post('/api/todos/:todoId/items', todoItemsController.create);
  app.get('/api/todos/:todoId', todosController.retrieve);
  app.put('/api/todos/:todoId', todosController.update);
  app.delete('/api/todos/:todoId', todosController.destroy);
  
  app.all('/api/todos/:todoId/items', (req, res) =>
  res.status(405).send({
    message: 'Method Not Allowed',
}));
};