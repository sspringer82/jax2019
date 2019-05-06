const express = require('express');

const app = express();

const todos = [];

app.get('/todo', (request, response) => {
  response.send('Hello World');
});

app.listen(8080);
