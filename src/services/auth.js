const jwt = require('jsonwebtoken');
const { loginSchema } = require('./schemas');

const secret = process.env.JWT_SECRET || 'mysecret';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const authService = {
  validateLoginBody: async (login) => {
    await loginSchema.validateAsync(login);
  },
  
  generateToken: (email) => {
    const token = jwt.sign({ data: email }, secret, jwtConfig);
    return token;
  },
  
  verifyToken: (token) => jwt.verify(token, secret),
};

module.exports = authService;