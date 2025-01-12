interface MessageError extends Error {
  [Symbol.toStringTag]: 'MessageError'
}

interface MessageErrorConstructor {
  new(message: string, status: ResponseStatus): MessageError
  (message: string, status: ResponseStatus): MessageError

  prototype: MessageError
}

export var MessageError: MessageErrorConstructor
