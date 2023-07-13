import { Logger } from "./Logger"

export class LocalStorageLogger implements Logger {
  getName() {
    return "LS logger"
  }

  output(description: string): void {
    localStorage.setItem("logs", `${localStorage.getItem("logs") || ""};\n${(new Date()).toISOString()}: ${description}`)
  }
}
