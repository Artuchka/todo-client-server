import { compareAsc } from "date-fns"
import { TaskItem } from "../../../../../features"

export function compareTasksByDeadline<T extends TaskItem>(firstTask: T, secondTask: T): number {
  const firstTaskDeadline = new Date(firstTask.metadata.deadline)
  const secondTaskDeadline = new Date(secondTask.metadata.deadline)

  return compareAsc(firstTaskDeadline, secondTaskDeadline)
}
