export const symbolToString = (symbol: symbol): string => {
  return symbol.toString()
    .replace(/Symbol/g, "")
    .replace(/[()]/g, "")
}
