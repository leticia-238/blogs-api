const authService = require('../services/auth');
const userService = require('../services/user');

const userController = {
  findAll: async (_req, res) => {
    const result = await userService.findAll();
    res.status(200).json(result);
  },
  
  findById: async (req, res) => {
    const { id } = req.params;
    const result = await userService.findById(id);
    res.status(200).json(result);
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