class ValidationException extends Error {
    constructor(message = 'Validation failed') {
      super(message);
      this.statusCode = 400; // Definindo o código de status para "Bad Request"
      this.message = message;
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  module.exports = ValidationException;