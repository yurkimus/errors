export function MessageError(message, status) {
  if (!(this instanceof MessageError))
    return new MessageError(message)

  var error = Error.apply(this, arguments)

  this.name = error.name = 'MessageError'
  this.message = error.message
  this.stack = error.stack
  this.status = status
}

MessageError.prototype[Symbol.toStringTag] = 'MessageError'

Reflect.setPrototypeOf(
  MessageError.prototype,
  Error.prototype,
)
