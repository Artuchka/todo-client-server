export interface RequestService {
  create: <T>(endpoint: string, data: T) => T | Promise<T>
  get: <T, V = void>(endpoint: string, findBy?: V) => T | Promise<T>
  update: <T>(endpoint: string, data: T) => T | Promise<T>
  delete: <T, V = void>(endpoint: string, findBy?: V) => T | Promise<T>
}
