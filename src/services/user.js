const { User } = require('../database/models');
const ConflictError = require('../errors/ConflictError');
const NotFoundError = require('../errors/NotFoundError');
const ValidationError = require('../errors/ValidationError');
const { userSchema } = require('./schemas');

const userService = {
  findAll: async () => {
    const users = await User.findAll({ 
      attributes: ['id', 'displayName', 'email', 'image'],
      raw: true, 
    });
    return users;
  },
  
  findById: async (userId) => {
    const user = await User.findByPk(userId, {
      attributes: ['id', 'displayName', 'email', 'image'],
      raw: true,
    });
    if (!user) throw new NotFoundError('User does not exist');
    return user;
  },
  
  findByEmailAndPassword: async (email, password) => {
    const user = await User.findOne({ 
      where: { email, password },
      raw: true,
    });
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