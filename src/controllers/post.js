const categoriesService = require('../services/categories');
const postService = require('../services/post');
const userService = require('../services/user');

const postController = {
  findAll: async (_req, res) => {
    const post = await postService.findAll();
    res.status(200).json(post);
  },
  
  create: async (req, res) => {
    const post = req.body;
    await postService.validatePostBody(post);
    const categories = await categoriesService.findByIds(post.categoryIds);
    const { userEmail } = req.auth;
    const { id: userId } = await userService.findByUser({ email: userEmail });
    const createdPost = await postService.create({ ...post, categories, userId });
    res.status(201).json(createdPost);
  },
};

module.exports = postController;