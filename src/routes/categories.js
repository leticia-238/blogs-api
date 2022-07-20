const { Router } = require('express');
const categoriesController = require('../controllers/categories');
const auth = require('../middlewares/authentication');

const categoriesRouter = Router();

categoriesRouter.get('/', auth, categoriesController.findAll);

categoriesRouter.post('/', auth, categoriesController.create);

module.exports = categoriesRouter;