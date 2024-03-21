export type HTTPErrorParams = Partial<Pick<HTTPError, "message">>

export class HTTPError {
  readonly message: string
  public readonly status: number

  constructor({ message, status }: HTTPError) {
    this.status = status
    this.message = message
  }
}

export class BadRequestError extends HTTPError {
  constructor({ message }: HTTPErrorParams) {
    super({ status: 400, message: message ?? "Bad request" })
  }
}
export class UnauthorisedError extends HTTPError {
  constructor({ message }: HTTPErrorParams) {
    super({ status: 401, message: message ?? "Unauthorised" })
  }
}
export class NotFoundError extends HTTPError {
  constructor({ message }: HTTPErrorParams) {
    super({ status: 404, message: message ?? "Not found" })
  }
}
export class UnknownError extends HTTPError {
  constructor() {
    super({ status: 500, message: "Internal Server Error" })
  }
}
