const { Router } = require('express');
const postController = require('../controllers/post');
const auth = require('../middlewares/authentication');

const postRouter = Router();

postRouter.get('/', auth, postController.findAll);

postRouter.post('/', auth, postController.create);

module.exports = postRouter;