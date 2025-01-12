interface AbortError extends Error {
  [Symbol.toStringTag]: 'AbortError'
}

interface AbortErrorConstructor {
  new(message: string): AbortError
  (message: string): AbortError

  prototype: AbortError
}

export var AbortError: AbortErrorConstructor
