if (globalThis.ResponseError !== ResponseError)
  globalThis.ResponseError = ResponseError

function ResponseError(message) {
  if (!(this instanceof ResponseError))
    return new ResponseError(message)

  var error = Error.apply(this, arguments)

  this.name = error.name = 'ResponseError'
  this.message = error.message
  this.stack = error.stack

  Reflect.setPrototypeOf(
    this,
    ResponseError.prototype,
  )
}

ResponseError.prototype[Symbol.toStringTag] = 'ResponseError'

Reflect.setPrototypeOf(
  ResponseError.prototype,
  Error.prototype,
)
