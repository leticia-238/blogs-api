const errors = {
  ValidationError: { code: 400 },
  JsonWebTokenError: { 
    code: 401, 
    message: 'Expired or invalid token',
  },
  UnauthorizedError: { code: 401 },
  NotFoundError: { code: 404 },
  SequelizeUniqueConstraintError: { 
    code: 409, 
    message: 'User already registered',
  },
};

const errorHandler = (err, _req, res, _next) => {
  const { name } = err;
  
  const status = errors[name].code || 500; 
  const message = errors[name].message || err.message;
  
  res.status(status).send({ message });
};

module.exports = errorHandler;