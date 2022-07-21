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
      { through: PostCategory, foreignKey: 'categoryId' });
    Category.belongsToMany(BlogPost, 
      { through: PostCategory, foreignKey: 'postId' });
  };
  
  return PostCategory;
};
