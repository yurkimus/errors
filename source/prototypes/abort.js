if (globalThis.AbortError !== AbortError)
  globalThis.AbortError = AbortError

function AbortError(message) {
  if (!(this instanceof AbortError))
    return new AbortError(message)

  var error = Error.apply(this, arguments)

  this.name = error.name = 'AbortError'
  this.message = error.message
  this.stack = error.stack

  Reflect.setPrototypeOf(
    this,
    AbortError.prototype,
  )
}

AbortError.prototype[Symbol.toStringTag] = 'AbortError'

Reflect.setPrototypeOf(
  AbortError.prototype,
  Error.prototype,
)
