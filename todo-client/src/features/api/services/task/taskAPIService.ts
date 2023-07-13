import {RequestService} from "../../../../shared"
import {TaskItem} from "../../../model"


export class TaskAPIService {

    constructor(
        // aggregation
        private APIService: RequestService,
    ) {
    }

    async addTask(taskItem: TaskItem): Promise<TaskItem> {
        return this.APIService.create<TaskItem>("/tasks", taskItem)
    }

    async getTask(taskId: string): Promise<TaskItem> {
        return this.APIService.get<TaskItem>(`/tasks/${taskId}`)
    }

    async getTasks(): Promise<TaskItem[]> {
        return this.APIService.get<TaskItem[]>("/tasks")
    }

    async updateTask(updatedTask: TaskItem) {
        return this.APIService.update<TaskItem>(`/tasks/${updatedTask.id}`, updatedTask)
    }

    async deleteTask(taskId: string) {
        return this.APIService.delete<TaskItem>(`/tasks/${taskId}`)
    }
}
