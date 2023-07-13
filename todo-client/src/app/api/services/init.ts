import { ConsoleLogger, HTTPService, LocalStorageLogger, serviceLocator } from "../../../shared"
import { TaskAPIService } from "../../../features"
import { NavigationServiceImpl, TaskService, TaskServiceImpl, WordCloudService } from "../../../widgets"
import {
  ErrorBoundaryLoggerRef, IS_SERVICE_WORKER_SUPPORTED,
  NavigationServiceRef,
  SERVER_BASE_URL,
  TaskAPIServiceRef,
  TaskServiceRef,
  WordCloudServiceRef,
} from "../../const"
import { initServiceWorkers } from "./serviceworkers"


export function init() {
  initServiceWorkers()
  servicesInit()
}

function servicesInit() {
  const consoleLogger = new ConsoleLogger()
  const lsLogger = new LocalStorageLogger()
  serviceLocator.addLogger(consoleLogger)
  serviceLocator.addLogger(lsLogger)


  const navigationService = new NavigationServiceImpl()
  const wordCloudService = new WordCloudService()
  const httpService = new HTTPService(SERVER_BASE_URL)
  const taskAPIService = new TaskAPIService(httpService)
  const taskService = new TaskServiceImpl(taskAPIService)
  const errorBoundaryLogger = new ConsoleLogger()

  serviceLocator.register(ErrorBoundaryLoggerRef, errorBoundaryLogger)
  serviceLocator.register(NavigationServiceRef, navigationService)
  serviceLocator.register(WordCloudServiceRef, wordCloudService)
  serviceLocator.register(TaskAPIServiceRef, taskAPIService)
  serviceLocator.register(TaskServiceRef, taskService)
  loadResources()
}

function loadResources() {
  const taskService = serviceLocator.resolve<TaskService>(TaskServiceRef)
  taskService.loadTasks()
}

