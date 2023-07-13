import {observable} from "mobx"
import {add} from "date-fns"
import {TaskItem, TaskList} from "../../../../features"
import {TaskListSort} from "../types"
import {loremTasks} from "../../../../app"

export interface TaskStore {
    tasks: TaskList
    isLoading: boolean
    currentTask: TaskItem
    searchString: string
    sortType: TaskListSort
}


export const taskStore = observable<TaskStore>({
    tasks: [],
    isLoading: false,
    currentTask: null,
    searchString: "",
    sortType: TaskListSort.PRIORITY,
})
