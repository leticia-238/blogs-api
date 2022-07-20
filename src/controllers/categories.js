const categoriesService = require('../services/categories');

const categoriesController = {
  findAll: async (_req, res) => {
    const categories = await categoriesService.findAll();
    res.status(200).json(categories);
  },
  
  create: async (req, res) => {
    const category = req.body;
    await categoriesService.validateCategoryBody(category);
    const createdCategory = await categoriesService.create(category);
    res.status(201).json(createdCategory);
  },
};

module.exports = categoriesController;