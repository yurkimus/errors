interface AbortError extends Error {
  [Symbol.toStringTag]: 'AbortError'
}

interface AbortErrorConstructor {
  new(message: string): AbortError
  (message: string): AbortError

  prototype: AbortError
}

declare var AbortError: AbortErrorConstructor
