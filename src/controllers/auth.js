const authService = require('../services/auth');
const userService = require('../services/user');

const authController = {
  login: async (req, res) => {
    const login = req.body;
    await authService.validateLoginBody(login);
    await userService.findByEmailAndPassword(login);
    const token = authService.generateToken(login.email);
    res.status(200).json({ token });
  },
};

module.exports = authController;