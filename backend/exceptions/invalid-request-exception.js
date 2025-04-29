class InvalidRequestException extends Error {
    constructor(message = 'Invalid Request') {
      super(message);
      this.statusCode = 400; 
      this.message = message;
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  module.exports = InvalidRequestException;