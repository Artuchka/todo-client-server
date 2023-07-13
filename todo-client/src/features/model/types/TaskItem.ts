export interface TaskItem {
  id: string
  title: string
  mode?: TaskMode
  metadata: TaskMetadata
}

export interface TaskMetadata {
  description: string
  createdAt: string
  deadline: string
  priority: number
  done: boolean
}

export enum TaskMode {
  UPDATE = "UPDATE",
  IDLE = "IDLE",
}
