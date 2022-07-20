const { categorySchema } = require('./schemas');
const { Category } = require('../database/models');
const ConflictError = require('../errors/ConflictError');

const categoriesService = {
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