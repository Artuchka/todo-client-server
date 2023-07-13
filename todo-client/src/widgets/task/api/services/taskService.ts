import {runInAction, toJS} from "mobx"
import {combineToLowercaseString, filterEntitiesBy, sortEntitiesBy} from "../../../../shared"
import {TaskAPIService, TaskItem, TaskList, TaskMode} from "../../../../features"
import {compareTasksByDeadline, compareTasksByPriority} from "../../lib"
import {TaskListSort, taskStore} from "../../model"

export interface TaskService {
    loadTasks(): void

    addTask(task: TaskItem): void

    updateTask(task: TaskItem): void

    taskToUpdateMode(taskId: string): void

    taskToIdleMode(taskId: string): void

    deleteTask(taskId: string): void


    setSearchString(searchString: string): void

    setSortType(sortType: TaskListSort): void


    sortTasks(sortType?: TaskListSort, tasks?: TaskList): TaskList

    filterTasks(searchString?: string, tasks?: TaskList): TaskList
}

export class TaskServiceImpl implements TaskService {

    constructor(private apiService: TaskAPIService) {
    }

    async loadTasks() {
        const tasks = await this.apiService.getTasks()
        runInAction(() => {
            if (tasks?.length >= 1) {
                taskStore.tasks = tasks
            }
        })
    }

    async addTask(task: TaskItem) {
        console.log("adding new task", task)

        const createdTask = await this.apiService.addTask(task)
        runInAction(() => {
            taskStore.tasks.push(createdTask)
        })
    }

    async updateTask(task: TaskItem) {
        const updatedTask = await this.apiService.updateTask(task)
        runInAction(() => {
            const foundTaskIndex = taskStore.tasks.findIndex(task => updatedTask.id === task.id)
            taskStore.tasks[foundTaskIndex] = updatedTask
        })

    }

    async deleteTask(taskId: string) {
        const message = await this.apiService.deleteTask(taskId)
        runInAction(() => {
            taskStore.tasks = filterEntitiesBy(taskStore.tasks,
                (task) => task.id,
                (occuredTaskId) => taskId !== occuredTaskId)
        })
    }


    taskToUpdateMode(taskId: string) {
        runInAction(() => {
            const foundTaskIndex = taskStore.tasks.findIndex(task => taskId === task.id)
            taskStore.tasks[foundTaskIndex].mode = TaskMode.UPDATE
        })
    }

    taskToIdleMode(taskId: string) {
        runInAction(() => {
            const foundTaskIndex = taskStore.tasks.findIndex(task => taskId === task.id)
            taskStore.tasks[foundTaskIndex].mode = TaskMode.IDLE
        })
    }


    setSearchString(searchString: string) {
        runInAction(() => {
            taskStore.searchString = searchString
        })
    }

    setSortType(sortType: TaskListSort) {
        runInAction(() => {
            taskStore.sortType = sortType
        })
    }

    filterTasks(searchString?: string, tasks?: TaskList): TaskList {
        const tasksToFilter = tasks || taskStore.tasks
        const stringToSearch = searchString || taskStore.searchString

        return filterEntitiesBy(tasksToFilter,
            (task) => combineToLowercaseString(task.title, task.metadata.description),
            (taskTexts) => taskTexts.includes(stringToSearch),
        )
    }

    sortTasks(sortType?: TaskListSort, tasks?: TaskList): TaskList {
        const tasksToSort = tasks || taskStore.tasks
        const typeOfSort = sortType || taskStore.sortType

        switch (typeOfSort) {
            case TaskListSort.DEADLINE:
                return this.sortTasksByDeadline(tasksToSort)
            case TaskListSort.PRIORITY:
                return this.sortTasksByPriority(tasksToSort)
            case TaskListSort.PRIORITY_AND_DEADLINE:
                return this.sortTasksByPriorityDeadline(tasksToSort)
        }
    }

    private sortTasksByDeadline(tasks: TaskList): TaskList {
        return sortEntitiesBy(tasks, compareTasksByDeadline)
    }

    private sortTasksByPriority(tasks: TaskList): TaskList {
        return sortEntitiesBy(tasks, compareTasksByPriority)
    }

    private sortTasksByPriorityDeadline(tasks: TaskList): TaskList {
        return sortEntitiesBy(tasks, compareTasksByPriority, compareTasksByDeadline)
    }
}
