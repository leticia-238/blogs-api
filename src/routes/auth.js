const { Router } = require('express');
const authController = require('../controllers/auth');

const authRouter = Router();

authRouter.post('/', authController.login);

module.exports = authRouter;