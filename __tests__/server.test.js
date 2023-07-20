'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const mockServer = supertest(server);
const { sequelize } = require('../src/auth/models');
// const { dbConnection } = require

const user1 = {username: 'mike', password: 'pizzaRules'};
const user2 = { username: 'joshua', password: 'pineapplePizza'};

beforeAll(async (done) => {
  await sequelize.sync();
  done();
});
afterAll(async (done) => {
  await sequelize.drop();
  done();
});

describe('test the server routes and db', () => {
  test('we can post a new user to /signup', async () => {
    // req.body = user1;
    const res = (await mockServer.post('/signup')).send(user1);
    expect(res.status).toBe(200);
    expect(JSON.parse(res.text).username).toBe('mike');
  });
  // test()
});
