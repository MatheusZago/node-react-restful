const Joi = require('joi');
const ValidationException = require('../exceptions/validation-exception');
const InvalidRequestException = require('../exceptions/invalid-request-exception');

const validateUser = (name, email) => {
    const schema = Joi.object({
      email: Joi.string()
        .email({ tlds: { allow: ['com', 'net', 'org'] } })
        .required()
        .messages({
          'string.email': 'The received email does not have a valid format.',
          'any.required': 'Email is mandatory.'
        }),
  
      name: Joi.string()
        .pattern(/^[A-Za-záéíóúãõçÁÉÍÓÚÃÕÇ\s]+$/)
        .min(2)
        .required()
        .messages({
          'string.pattern.base': 'Name must contain only letters.',
          'string.min': 'The name must have at least 2 characters.',
          'any.required': 'Name is mandatory.'
        })
    });
  
    const { error } = schema.validate({ email, name });
    if (error) {
      throw new InvalidRequestException(error.details[0].message);
    }
  };

  const validateId = (id) => {
    const schema = Joi.number()
        .integer()
        .min(0)
        .required()
        .messages({
            'number.base': 'The ID must be a number.',
            'number.integer': 'The ID must be an integer.',
            'number.min': 'The ID must be 0 or greater.',
            'any.required': 'ID is mandatory.'
        });

    const { error } = schema.validate(id);
    if (error) {
        throw new InvalidRequestException(error.details[0].message);
    }
};
  
  module.exports = { validateUser, validateId };