'use strict';

const express = require('express');
const cors = require('cors');
const notFound = require('./middleware/404');
const errorHandler = require('./middleware/500');


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  res.status(200).send('proof: LIFE!');
});

app.use('*', notFound);
app.use(errorHandler);

const start = (port) => app.listen (port, () => console.log('listening on port:', port));

module.exports = { start, app };