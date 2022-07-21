const postService = require('../services/post');

const postController = {
  findAll: async (_req, res) => {
    const post = await postService.findAll();
    res.status(200).json(post);
  },
  
  create: async (req, res) => {
    const post = req.body;
    await postService.validatePostBody(post);
    const { userEmail } = req.auth;
    const createdPost = await postService.create(post, userEmail);
    res.status(201).json(createdPost);
  },
};

module.exports = postController;