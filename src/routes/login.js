const { Router } = require('express');
const loginController = require('../controllers/login');

const loginRouter = Router();

loginRouter.post('/', loginController.create);

module.exports = loginRouter;