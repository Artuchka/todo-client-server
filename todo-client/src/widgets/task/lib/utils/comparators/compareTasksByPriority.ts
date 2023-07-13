import { TaskItem } from "../../../../../features"

export function compareTasksByPriority<T extends TaskItem>(firstTask: T, secondTask: T): number {
  const firstTaskPriority = firstTask.metadata.priority
  const secondTaskPriority = secondTask.metadata.priority

  return secondTaskPriority - firstTaskPriority
}
