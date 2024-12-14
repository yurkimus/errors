if (globalThis.AuthorizationError !== AuthorizationError)
  globalThis.AuthorizationError = AuthorizationError

function AuthorizationError(message) {
  if (!(this instanceof AuthorizationError))
    return new AuthorizationError(message)

  var error = Error.apply(this, arguments)

  this.name = error.name = 'AuthorizationError'
  this.message = error.message
  this.stack = error.stack

  Reflect.setPrototypeOf(
    this,
    AuthorizationError.prototype,
  )
}

AuthorizationError.prototype[Symbol.toStringTag] = 'AuthorizationError'

Reflect.setPrototypeOf(
  AuthorizationError.prototype,
  Error.prototype,
)
