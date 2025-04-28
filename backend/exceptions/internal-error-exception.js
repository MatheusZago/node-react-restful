class InternalErrorException extends Error {
    constructor(message = 'Internal server error') {
      super(message);
      this.statusCode = 500;
      this.message = message;
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  module.exports = InternalErrorException;