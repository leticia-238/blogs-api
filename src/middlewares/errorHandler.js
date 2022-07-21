const errors = {
  ValidationError: { code: 400 },
  JsonWebTokenError: { 
    code: 401, 
    message: 'Expired or invalid token',
  },
  UnauthorizedError: { code: 401 },
  NotFoundError: { code: 404 },
  ConflictError: { code: 409 },
};

const errorHandler = (err, _req, res, _next) => {
  const { name } = err;
  
  const status = errors[name] ? errors[name].code : 500; 
  const message = errors[name] ? errors[name].message : err.message;
  
  res.status(status).send({ message });
};

module.exports = errorHandler;