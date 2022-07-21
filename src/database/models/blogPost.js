module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: { allowNull: false, type: DataTypes.STRING },
    content: { allowNull: false, type: DataTypes.STRING },
    userId: { 
      allowNull: false,
      type: DataTypes.INTEGER, 
      foreignKey: true, 
    },
    published: { 
      allowNull: false, 
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, 
    },
    updated: { 
      allowNull: false, 
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, 
    },
  }, { timestamps: false });
  
  BlogPost.associate = ({ User }) => {
    BlogPost.belongsTo(User, { foreignKey: 'userId' });
  };
  
  return BlogPost;
};
