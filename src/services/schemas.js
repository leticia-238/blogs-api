const Joi = require('joi');

module.exports = {
  loginSchema: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).required().messages({
    'string.empty': 'Some required fields are missing',
  }),
  userSchema: Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string().required(),
  }).required(),
  categorySchema: Joi.object({
    name: Joi.string().required(),
  }).required(),
  postSchema: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().items(Joi.number().required()),
  }).required().messages({
    'string.empty': 'Some required fields are missing',
  }),
};
