import { HTTPMethod } from "../../../../../app/types"
import { RequestService } from "../RequestService"
import { Logger } from "../../logger"


export class HTTPService implements RequestService {
  private readonly baseUrl: string = ""
  private readonly logger: Logger = null

  constructor(baseUrl: string, logger?: Logger) {
    this.baseUrl = baseUrl
    if (logger) {
      this.logger = logger
    }
  }

  async create<T>(endpoint: string, data: T): Promise<T> {
    return await this.request<T>(HTTPMethod.POST, endpoint, data)
  }

  async get<T, V>(endpoint: string, findBy?: V): Promise<T> {
    return await this.request<T>(HTTPMethod.GET, endpoint, findBy)
  }

  async update<T>(endpoint: string, data: T): Promise<T> {
    return await this.request<T>(HTTPMethod.PUT, endpoint, data)
  }

  async delete<T, V>(endpoint: string, findBy?: V): Promise<T> {
    return await this.request<T>(HTTPMethod.DELETE, endpoint, findBy)
  }

  private async request<T>(
    method: HTTPMethod,
    endpoint: string,
    data?: any,
  ): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: data ? JSON.stringify(data) : undefined,
      })

      if (!response.ok) {
        this.logger?.output(`Failed to fetch ${endpoint}: ${response.statusText}`)
      }

      return response.json()
    } catch (e) {
      this.logger?.output(`Failed to fetch ${endpoint}: ${e}`)
      return null
    } finally {
      this.logger?.output(`Ended fetching ${endpoint}`)
    }
  }
}
