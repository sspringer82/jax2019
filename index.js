const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const stream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
  flags: 'a',
});

const todoRouter = require('./todo');

const app = express();

app.use(morgan('combined', { stream }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`requesting ${req.url}`);
  next();
});

app.use('/todo', todoRouter);

app.listen(8080);
