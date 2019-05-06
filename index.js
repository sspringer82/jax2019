const express = require('express');

const Todo = require('./todo');

const app = express();

const todos = [
  new Todo('Get up', true),
  new Todo('Eat', true),
  new Todo('🌛 and dream stuff 👻', false),
];

app.get('/todo', (request, response) => {
  response.send(todos);
});

app.listen(8080);

const router = express.Router();

router.get('/', (req, res) => res.send('foo'));

app.use('/todo', router);
