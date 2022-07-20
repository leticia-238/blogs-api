const { categorySchema } = require('./schemas');
const { Category } = require('../database/models');
const ConflictError = require('../errors/ConflictError');

const categoriesService = {
  findAll: async () => {
    const categories = await Category.findAll({ 
      attributes: ['id', 'name'],
      raw: true, 
    });
    return categories;
  },
  
  create: async (category) => {
    const [createdCategory, created] = await Category.findOrCreate(
      { where: category }, 
    );
    if (!created) throw new ConflictError('Category already exist');
    return createdCategory;
  },
  
  validateCategoryBody: async (category) => {
    await categorySchema.validateAsync(category);
  },
};

module.exports = categoriesService;