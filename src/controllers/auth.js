const authService = require('../services/auth');
const userService = require('../services/user');
const ValidationError = require('../errors/ValidationError');

const authController = {
  login: async (req, res) => {
    const login = req.body;
    await authService.validateLoginBody(login);
    const { email, password } = login;
    const user = await userService.findByUser({ email, password });
    if (!user) throw new ValidationError('Invalid fields');
    const token = authService.generateToken(email);
    res.status(200).json({ token });
  },
};

module.exports = authController;