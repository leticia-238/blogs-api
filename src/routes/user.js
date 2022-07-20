const { Router } = require('express');
const userController = require('../controllers/user');
const auth = require('../middlewares/authentication');

const userRouter = Router();

userRouter.get('/', auth, userController.findAll);

userRouter.get('/:id', auth, userController.findById);

userRouter.post('/', userController.create);

module.exports = userRouter;