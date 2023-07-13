export interface Logger {
  output: (info: string) => void
  getName: () => string
}
