import Joi from 'joi';

const allFilled = '400|All fields must be filled';

export const taskCreate = Joi.object({
  // TODO when user route implements put required in userId
  userId: Joi.string().min(3).messages({
    // status code | message
    'any.required': '400|userId is required',
    'string.base': '422|userId must be a string',
  }),
  task: Joi.string().min(3).required().messages({
    // status code | message
    'any.required': '400|task is required',
    'string.base': '422|task must be a string',
    'string.empty': allFilled,
    'string.min': '400|task length must be at least 3 characters long',
  }),
  status: Joi.number().strict().required().messages({
    // status code | message
    'any.required': '400|status is required',
    'number.base': '422|status must be a number',
    'number.empty': allFilled,
  }),
});

export const taskUpdate = Joi.object({
  id: Joi.string().min(3).required().messages({
    // status code | message
    'any.required': '400|userId is required',
    'string.base': '422|userId must be a string',
    'string.empty': allFilled,
  }),
  task: Joi.string().min(3).required().messages({
    // status code | message
    'any.required': '400|task is required',
    'string.base': '422|task must be a string',
    'string.empty': allFilled,
  }),
  status: Joi.number().strict().required().messages({
    // status code | message
    'any.required': '400|status is required',
    'number.base': '422|status must be a number',
    'number.empty': allFilled,
  }),
});
