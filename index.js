const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
const auth = require('./auth');

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

app.use('/todo', expressJwt({ secret: 'secret' }), todoRouter);
app.use('/login', auth);

app.listen(8080);
