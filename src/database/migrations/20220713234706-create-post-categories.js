const { DataTypes } = require('sequelize');

const attributes = {
  postId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    references: {
      model: 'BlogPosts',
      key: 'id',
    },
  },
  categoryId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    references: {
      model: 'Categories',
      key: 'id',
    },
  },
};

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('PostCategories', attributes);
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('PostCategories');
  },
};