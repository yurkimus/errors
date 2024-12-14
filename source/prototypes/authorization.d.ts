interface AuthorizationError extends Error {
  [Symbol.toStringTag]: 'AuthorizationError'
}

interface AuthorizationErrorConstructor {
  new(message: string): AuthorizationError
  (message: string): AuthorizationError

  prototype: AuthorizationError
}

declare var AuthorizationError: AuthorizationErrorConstructor
