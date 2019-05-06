const express = require('express');

const todoRouter = require('./todo');

const app = express();

app.use((req, res, next) => {
  console.log(`requesting ${req.url}`);
  next();
});

app.use('/todo', todoRouter);

app.listen(8080);
