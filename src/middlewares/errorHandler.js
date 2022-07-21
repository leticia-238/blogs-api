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
  if (errors[name]) {
    const message = errors[name].message || err.message;
    res.status(errors[name].code).json({ message });
  }
  res.status(500).send({ message: err.message });
};

module.exports = errorHandler;