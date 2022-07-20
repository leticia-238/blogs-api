const { User } = require('../database/models');
const ConflictError = require('../errors/ConflictError');
const NotFoundError = require('../errors/NotFoundError');
const ValidationError = require('../errors/ValidationError');
const { userSchema } = require('./schemas');

const userService = {
  findAll: async () => {
    const result = await User.findAll({ raw: true });
    return result.map(({ id, displayName, email, image }) => (
      { id, displayName, email, image }
    ));
  },
  
  findById: async (userId) => {
    const user = await User.findByPk(userId);
    if (!user) throw new NotFoundError('User does not exist');
    const { id, displayName, email, image } = user;
    return { id, displayName, email, image };
  },
  
  findByEmailAndPassword: async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password } });
    if (!user) throw new ValidationError('Invalid fields');
    return user;
  },
  
  create: async (user) => {
    const [, created] = await User.findOrCreate({ where: user });
    if (!created) throw new ConflictError('User already registered');
  },
  
  validateUserBody: async (user) => {
    await userSchema.validateAsync(user);
  },
};

module.exports = userService;