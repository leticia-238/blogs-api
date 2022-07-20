const authService = require('../services/auth');
const userService = require('../services/user');

const authController = {
  login: async (req, res) => {
    const login = req.body;
    await authService.validateLoginBody(login);
    const { email, password } = login;
    await userService.findByEmailAndPassword(email, password);
    const token = authService.generateToken(email);
    res.status(200).json({ token });
  },
};

module.exports = authController;