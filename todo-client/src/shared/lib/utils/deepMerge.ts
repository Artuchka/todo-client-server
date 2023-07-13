export function deepMerge<T extends { [key in string]: any }>(source: T, target: T): { [key in string]: any } {

  const result: { [key in string]: any } = {}
  const commonKeys = new Set()
  Object.keys(source).forEach(commonKeys.add, commonKeys)
  Object.keys(target).forEach(commonKeys.add, commonKeys)

  commonKeys.forEach((key: string) => {
    result[key] = mergeValues(source[key], target[key])
  })

  return result
}

export function mergeValues(a: any, b: any): any {
  if (isObject(a) && isObject(b)) {
    return deepMerge(a, b)
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return [ ...a, ...b ]
  }
  if (!Array.isArray(a) && Array.isArray(b)) {
    return [ a, ...b ]
  }
  if (Array.isArray(a) && !Array.isArray(b)) {
    return [ ...a, b ]
  }

  return b === undefined ? a : b
}

function isObject(maybeObj: any) {
  return typeof maybeObj === "object" && !Array.isArray(maybeObj)
}


// console.log(deepMerge({a: 1}, {d:1}))
// console.log(deepMerge({a: 1}, {a: 2}))
// console.log(deepMerge({a: [ 1 ], b: 2}, {a: [ 2 ], b: 3}))
