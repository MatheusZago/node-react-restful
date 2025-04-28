class UnauthorizedException extends Error {
    constructor(message = 'Unauthorized') {
      super(message);
      this.statusCode = 401;
      this.message = message;
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  module.exports = UnauthorizedException;