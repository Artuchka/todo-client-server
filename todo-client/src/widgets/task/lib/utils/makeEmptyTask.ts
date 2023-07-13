import { TaskItem } from "../../../../features"
import { v4 } from "uuid"

export const makeEmptyTask = (): TaskItem => {
  return {
    id: v4(),
    title: "",
    metadata: {
      description: "",
      deadline: (new Date()).toISOString(),
      priority: 0,
      done: false,
      createdAt: (new Date()).toISOString(),
    },
  }
}

