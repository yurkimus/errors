export function AbortError(message) {
  if (!(this instanceof AbortError))
    return new AbortError(message)

  var error = Error.apply(this, arguments)

  this.name = error.name = 'AbortError'
  this.message = error.message
  this.stack = error.stack
}

AbortError.prototype[Symbol.toStringTag] = 'AbortError'

Reflect.setPrototypeOf(
  AbortError.prototype,
  Error.prototype,
)
