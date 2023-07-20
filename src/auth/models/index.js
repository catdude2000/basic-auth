'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const user = require('./users-model');

const DATABASE_URL = 
// process.env.NODE_ENV === 'test' ? 'sqlite::memory' :
// need above^^^^^
process.env.DB_URL;


const sequelizeDatabase = new Sequelize(DATABASE_URL);

const userModel = user(sequelizeDatabase, DataTypes);

module.exports = { sequelizeDatabase, userModel, DataTypes };