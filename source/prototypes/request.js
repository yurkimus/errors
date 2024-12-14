if (globalThis.RequestError !== RequestError)
  globalThis.RequestError = RequestError

function RequestError(message) {
  if (!(this instanceof RequestError))
    return new RequestError(message)

  var error = Error.apply(this, arguments)

  this.name = error.name = 'RequestError'
  this.message = error.message
  this.stack = error.stack

  Reflect.setPrototypeOf(
    this,
    RequestError.prototype,
  )
}

RequestError.prototype[Symbol.toStringTag] = 'RequestError'

Reflect.setPrototypeOf(
  RequestError.prototype,
  Error.prototype,
)
