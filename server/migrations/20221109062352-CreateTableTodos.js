'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable('todos', { 
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        user: DataTypes.STRING,
        body: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      });
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.dropTable('todos');
  }
};