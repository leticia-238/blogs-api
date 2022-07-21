const UnauthorizedError = require('../errors/UnauthorizedError');
const authService = require('../services/auth');

const authentication = (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) throw new UnauthorizedError('Token not found');
  const { data } = authService.verifyToken(token);
  req.auth = { userEmail: data };
  next();
};

module.exports = authentication;