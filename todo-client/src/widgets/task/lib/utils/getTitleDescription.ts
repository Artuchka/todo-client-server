import { TaskItem } from "../../../../features"

export const getTitleDescription = (task: TaskItem) => {
  return `Title: ${task.title}\nDescription: ${task.metadata.description}`
}
