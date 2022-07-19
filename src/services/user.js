const { User } = require('../database/models');
const ValidationError = require('../errors/ValidationError');
const { userSchema } = require('./schemas');

const userService = {
  findByEmailAndPassword: async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password } });
    if (!user) throw new ValidationError('Invalid fields');
    return user;
  },
  
  create: async (user) => {
    await User.create(user);
  },
  
  validateUserBody: async (user) => {
    await userSchema.validateAsync(user);
  },
};

module.exports = userService;