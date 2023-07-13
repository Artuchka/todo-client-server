import { RequestService } from "../RequestService"

export class HTMLService implements RequestService {

  create<T>(endpoint: string, data: T): T {
    return null as T
  }

  async get<T, V>(endpoint: string, findBy: V): Promise<T> {
    return null as T
  }

  async update<T>(endpoint: string, data: T): Promise<T> {
    return null as T
  }

  async delete<T, V>(endpoint: string, findBy: V): Promise<T> {
    return null as T
  }
}
