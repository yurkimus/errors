interface ResponseError extends Error {
  [Symbol.toStringTag]: 'ResponseError'
}

interface ResponseErrorConstructor {
  new(message: string): ResponseError
  (message: string): ResponseError

  prototype: ResponseError
}

declare var ResponseError: ResponseErrorConstructor
