const NotFoundException = require('../exceptions/not-found-exception');
const ValidationException = require('../exceptions/validation-exception');
const UnauthorizedException = require('../exceptions/unauthorized-exception');
const InternalErrorException = require('../exceptions/internal-error-exception');
const InvalidRequestException = require('../exceptions/invalid-request-exception');
const ConflictException = require('../exceptions/conflict-exception');

const globalExceptionHandler = (error, req, res, next) => {

  if (error instanceof NotFoundException || error instanceof ValidationException 
    || error instanceof UnauthorizedException || error instanceof InternalErrorException
    || error instanceof InvalidRequestException || error instanceof ConflictException) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Something went wrong! Please try again later.',
  });
};

module.exports = globalExceptionHandler;