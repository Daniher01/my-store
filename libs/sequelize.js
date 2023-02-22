const { Sequelize } = require('sequelize');

const  { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI  = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`; // URL de coneexion

const sequelize = new Sequelize(URI,{
  dialect: 'postgres',
  logging: console.log
})


module.exports = sequelize;
