class ApiError extends Error {
  constructor(statusCode, massage = "Something went wrong", errors = [], statck = "") {
    super(massage);
    this.statusCode = statusCode;
    this.massage = massage;
    this.data = null;
    this.success = false;
    this.errors = errors;

    if (statck) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
