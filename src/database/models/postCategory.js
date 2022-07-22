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
  }, { timestamps: false });
  
  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, 
      { through: PostCategory, foreignKey: 'categoryId', as: 'categories' });
    Category.belongsToMany(BlogPost, 
      { through: PostCategory, foreignKey: 'postId' });
    PostCategory.belongsTo(BlogPost, { foreignKey: 'postId' });
    PostCategory.belongsTo(Category, { foreignKey: 'categoryId' });
  };
  
  return PostCategory;
};
