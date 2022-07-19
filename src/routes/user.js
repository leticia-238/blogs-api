const { Router } = require('express');
const userController = require('../controllers/user');

const userRouter = Router();

userRouter.post('/', userController.create);

module.exports = userRouter;