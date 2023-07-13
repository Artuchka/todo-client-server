import { Logger } from "./Logger"

export class ConsoleLogger implements Logger {
  getName() {
    return "Console logger"
  }

  output(description: string): void {
    console.log(description)
  }
}
