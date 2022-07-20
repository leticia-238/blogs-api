const UnauthorizedError = require('../errors/UnauthorizedError');
const authService = require('../services/auth');

const authentication = (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) throw new UnauthorizedError('Token not found');
  authService.verifyToken(token);
  next();
};

module.exports = authentication;