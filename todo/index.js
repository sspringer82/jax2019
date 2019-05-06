const express = require('express');

const Todo = require('./todo');

const router = express.Router();

const todos = [
  new Todo('Get up', true),
  new Todo('Eat', true),
  new Todo('🌛 and dream stuff 👻', false),
];

router.get('/', (req, res) => {
  response.send(todos);
});

module.exports = router;
