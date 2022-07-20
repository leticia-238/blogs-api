const categoriesService = require('../services/categories');

const categoriesController = {
  create: async (req, res) => {
    const category = req.body;
    await categoriesService.validateCategoryBody(category);
    const createdCategory = await categoriesService.create(category);
    res.status(201).json(createdCategory);
  },
};

module.exports = categoriesController;