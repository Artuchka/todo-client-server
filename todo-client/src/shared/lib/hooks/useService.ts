import { serviceLocator } from "../../api"

export function useService<T>(serviceName: symbol): T {
  const service = serviceLocator.resolve<T>(serviceName)
  return service
}
