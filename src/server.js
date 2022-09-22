'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./middleware/logger');
const food = require('./routes/food');
const clothes = require('./routes/clothes');
const send404 = require('./error-handlers/404');
const send500 = require('./error-handlers/500');

app.use(cors());
app.use(express.json());
app.use(logger);

app.get('/', (request, response) => {
  response.status(200).send('My Server');
});

app.use(food);
app.use(clothes);

app.get('*', send404);
app.use(send500);

module.exports = app;
