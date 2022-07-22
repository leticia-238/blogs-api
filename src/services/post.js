const { postSchema } = require('./schemas');
const { BlogPost, Category, PostCategory, User, sequelize } = require('../database/models');

const postService = {
  findAll: async () => {
    const posts = await BlogPost.findAll({  
      include: [
        { 
          model: User, 
          as: 'user', 
          attributes: { exclude: ['password'] },
          required: true, 
        },
        { 
          model: Category,
          as: 'categories',
          through: { attributes: [] },
          required: true, 
        },
      ],
    });
    return posts;
  },
  
  create: async ({ title, content, categories, userId }) => {
    const createdPost = await sequelize.transaction(async (t) => {
      const post = await BlogPost.create({
        title, content, userId,
      }, { transaction: t });
      
      await PostCategory.bulkCreate(categories.map(({ id }) => (
        { postId: post.id, categoryId: id }
      )), { transaction: t });
      
      return post;
    });
    
    return createdPost;
  },
  
  validatePostBody: async (post) => {
    await postSchema.validateAsync(post);
  },
};

module.exports = postService;