export function combineToLowercaseString(...strings: Array<string>) {
  return strings.join("").replace(" ", "")
}
