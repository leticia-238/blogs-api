const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('Categories', attributes);
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Categories');
  },
};