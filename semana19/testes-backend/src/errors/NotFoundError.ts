import { BaseError } from "./BaseError/BaseError";

export class NotFoundError extends BaseError {
  constructor(message: string) {
    super(message, 404);
  }
}

export class UnauthorizedError extends BaseError {
  constructor(message: string) {
    super(message, 403);
  }
}
