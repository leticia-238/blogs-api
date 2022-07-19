const authService = require('../services/auth');
const userService = require('../services/user');

const userController = {
  create: async (req, res) => {
    const user = req.body;
    await userService.validateUserBody(user);
    await userService.create(user);
    const token = authService.generateToken(user.email);
    res.status(201).json({ token });
  },
};

module.exports = userController;