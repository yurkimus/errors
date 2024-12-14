interface RequestError extends Error {
  [Symbol.toStringTag]: 'RequestError'
}

interface RequestErrorConstructor {
  new(message: string): RequestError
  (message: string): RequestError

  prototype: RequestError
}

declare var RequestError: RequestErrorConstructor
