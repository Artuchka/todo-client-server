export function deepClone<T>(source: T): T {
  if (source === null) {
    return source
  }

  if (Array.isArray(source) || source instanceof Array) {
    return source.map(deepClone) as T
  }

  if (source instanceof Date) {
    return new Date(source.getTime()) as T
  }

  if (source && typeof source === "object") {
    source = source as { [key: string]: any } & T
    Object.getOwnPropertyNames(source).reduce((aggObject, prop) => {
      Object.defineProperty(aggObject, prop, Object.getOwnPropertyDescriptor(source, prop)!)
      aggObject[prop] = deepClone((source as { [key: string]: any })[prop])
      return aggObject
    }, Object.create(Object.getPrototypeOf(source)))
  }

  return source as T
}
