const { DataTypes } = require('sequelize')

module.exports = (sequelize) => { 
    const Todo = sequelize.define('todos', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        user: DataTypes.STRING,
        body: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    })

    return Todo
 }