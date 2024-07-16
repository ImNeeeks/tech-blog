// Connection file should allow application to be hosted locally and on Render

const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false, // Disable logging; default: console.log
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // You may need to change this based on your environment
      },
    },
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, // Changed from DB_PW to DB_PASS
    {
      host: 'localhost',
      dialect: 'postgres',
      logging: false, // Disable logging; default: console.log
    },
  );
}

// Test connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
