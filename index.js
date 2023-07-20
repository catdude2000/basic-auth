const PORT = process.env.PORT || 3002; //use strictt?
const server = require('./server.js');
const { sequelizeDatabase } = require('./src/auth/models');

sequelizeDatabase
.sync()
.then(() => server.listen(PORT));
.catch((e) => console.error(e));