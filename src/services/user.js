const { User } = require('../database/models');
const ConflictError = require('../errors/ConflictError');
const NotFoundError = require('../errors/NotFoundError');
const { userSchema } = require('./schemas');

const userService = {
  findAll: async () => {
    const users = await User.findAll({ 
      attributes: { exclude: ['password'] },
      raw: true, 
    });
    return users;
  },
  
  findById: async (userId) => {
    const user = await User.findByPk(userId, {
      attributes: { exclude: ['password'] },
      raw: true,
    });
    if (!user) throw new NotFoundError('User does not exist');
    return user;
  },
  
  findByUser: async (userData) => {
    const user = await User.findOne({ 
      where: userData,
      attributes: { exclude: ['password'] },
      raw: true,
    });
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