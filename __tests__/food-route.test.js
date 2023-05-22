'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models');

const request = supertest(app);

// beforeAll( async () = {
//   await sequelizeDatabase.sync()
// });
