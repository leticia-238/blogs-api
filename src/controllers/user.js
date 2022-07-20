const authService = require('../services/auth');
const userService = require('../services/user');

const userController = {
  findAll: async (_req, res) => {
    const users = await userService.findAll();
    res.status(200).json(users);
  },
  
  findById: async (req, res) => {
    const { id } = req.params;
    const user = await userService.findById(id);
    res.status(200).json(user);
  },
  
  create: async (req, res) => {
    const user = req.body;
    await userService.validateUserBody(user);
    await userService.create(user);
    const token = authService.generateToken(user.email);
    res.status(201).json({ token });
  },
};

module.exports = userController;