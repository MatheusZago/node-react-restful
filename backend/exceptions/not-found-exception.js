class NotFoundException extends Error {
    constructor(message = 'Resource not found') {
      super(message);
      this.statusCode = 404; 
      this.message = message;

      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  module.exports = NotFoundException;