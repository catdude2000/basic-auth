const PORT = process.env.PORT || 3002; //use strictt?
const server = require('./server.js');
const { sequelize } = require('./src/auth/models');

// sequelizeDatabase
//   .sync()
//   .then(() => server.listen(PORT))
//   .catch((e) => console.error(e));

// sequelizeDatabase
sequelize
  .sync()
  .then(() => {
    server.listen(PORT, () => console.log('server up'));
  }).catch(e => {
    console.error('Could not start server', e.message);
  });