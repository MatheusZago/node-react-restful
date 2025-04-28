const NotFoundException = require('../exceptions/not-found-exception');
const ValidationException = require('../exceptions/validation-exception');
const UnauthorizedException = require('../exceptions/unauthorized-exception');
const InternalErrorException = require('../exceptions/internal-error-exception');
const InvalidRequestException = require('../exceptions/invalid-request-exception');

const globalExceptionHandler = (err, req, res, next) => {

    console.log('ERR RECEBIDO ===>', err);
    console.log('É instanceof NotFoundException?', err instanceof NotFoundException);
    console.log('Tipo do erro:', err.constructor.name);

  if (err instanceof NotFoundException || err instanceof ValidationException 
    || err instanceof UnauthorizedException || err instanceof InternalErrorException
    || err instanceof InvalidRequestException) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Something went wrong! Please try again later.',
  });
};

module.exports = globalExceptionHandler;