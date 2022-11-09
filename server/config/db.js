const { Sequelize } = require('sequelize');

// importing models

const Todo = require('../models/Todo')

//database connection
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data.sqlite3'
})

// Getting models
const models = [
    Todo
];

//register models in sequelize
models.forEach((model) => { model(sequelize) })

module.exports = sequelize