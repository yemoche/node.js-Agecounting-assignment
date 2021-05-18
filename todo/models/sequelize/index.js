const Sequelize = require('sequelize');
const configs = require('../../configs/configs.json');
const Todo = require('./Todo');

const sequelize = new Sequelize(configs.mysql.options);

//connecting/ testing with mysql database
sequelize
.authenticate()
.then(() => console.log(`.....I'm inside the DB!`))
.catch((error) => console.log(error.message || 'oops! mysql failed'));


let db = {}

db["Todo"] = Todo(sequelize, Sequelize.DataTypes);

module.exports = db;