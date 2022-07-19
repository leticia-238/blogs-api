const { User } = require('../database/models');
const ValidationError = require('../errors/ValidationError');

const userService = {
  findByEmailAndPassword: async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password } });
    if (!user) throw new ValidationError('Invalid fields');
    return user;
  },
};

module.exports = userService;