class ConflictException extends Error {
    constructor(message = 'Conflict, email already registered') {
      super(message);
      this.statusCode = 409; 
      this.message = message;

      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  module.exports = ConflictException;