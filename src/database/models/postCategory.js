module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { 
      allowNull: false, 
      type: DataTypes.INTEGER,
      foreignKey: true, 
    },
    categoryId: { 
      allowNull: false, 
      type: DataTypes.INTEGER,
      foreignKey: true, 
    },
  });
  
  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, { through: PostCategory });
    Category.belongsToMany(BlogPost, { through: PostCategory });
  };
  
  return PostCategory;
};
