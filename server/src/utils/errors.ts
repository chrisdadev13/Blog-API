export abstract class HttpError extends Error {
  code: number;
  message: string;

  constructor(code: number, message: string) {
    super();
    this.code = code;
    this.message = message;
  }
}

export class Conflict extends HttpError {
  constructor(message: string) {
    super(409, message);
  }
}

export class BadRequest extends HttpError {
  constructor(message: string) {
    super(400, message);
  }
}
