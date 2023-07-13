import {Logger} from "./logger"
import {symbolToString} from "../../lib"

export class ServiceLocator {
    private services: Map<symbol, any> = new Map()
    private loggers: Array<Logger> = []
    private prefix: string = "[Service Locator]:\n"

    constructor(
        initLogger?: Logger,
    ) {
        if (initLogger) {
            this.loggers.push(initLogger)
        }
    }

    addLogger(newLogger: Logger): void {
        this.loggers.push(newLogger)
        this.log(`${this.prefix}New logger added: ${newLogger.getName()}`)
    }

    removeAllLoggers(): void {
        this.log(`${this.prefix}All loggers are being removed`)
        this.loggers = []
    }

    private log(info: string): void {
        // delegation
        for (const logger of this.loggers) {
            logger.output(info)
        }
    }

    register(key: symbol, service: any): void {
        this.services.set(key, service)
        this.log(`${this.prefix}Registered new service.\nKey: ${symbolToString(key)}`)
    }

    resolve<T>(key: symbol): T {
        const service = this.services.get(key)
        if (!service) {
            this.log(`${this.prefix}Failed to resolve a service.\nKey: ${symbolToString(key)}`)
            throw new Error(`${this.prefix}Service not found.\nKey:  ${symbolToString(key)}`)
        }
        return service
    }
}

