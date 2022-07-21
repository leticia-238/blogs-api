const { categorySchema } = require('./schemas');
const { Category } = require('../database/models');
const ConflictError = require('../errors/ConflictError');
const ValidationError = require('../errors/ValidationError');

const categoriesService = {
  findAll: async () => {
    const categories = await Category.findAll({ 
      attributes: ['id', 'name'],
      raw: true, 
    });
    return categories;
  },
  
  findByIds: async (categoryIds) => {
    const categories = await Category.findAll({ 
      where: { id: categoryIds },
      attributes: ['id', 'name'],
      raw: true, 
    });
    if (!categories.length) throw new ValidationError('"categoryIds" not found');
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