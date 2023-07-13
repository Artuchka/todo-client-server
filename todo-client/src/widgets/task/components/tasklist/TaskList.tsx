import React from "react"
import { observer } from "mobx-react-lite"
import { List, SpinningLoader, useService } from "../../../../shared"
import { TaskServiceRef } from "../../../../app"
import { TaskService } from "../../api"
import { taskStore } from "../../model"
import { TaskListItem } from "./TaskListItem"


export const TaskList = observer(() => {

  const taskService = useService<TaskService>(TaskServiceRef)

  const {
    isLoading,
  } = taskStore

  const filteredSortedTasks = (() => {
    const filteredTasks = taskService.filterTasks()
    const sortedTasks = taskService.sortTasks(taskStore.sortType, filteredTasks)
    return sortedTasks
  })()

  if (isLoading) {
    return (
      <div className="row">
        <div className="col text-center">
          <SpinningLoader/>
        </div>
      </div>
    )
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <table className=" table table-hover caption-top align-middle">
          <caption>List of tasks</caption>

          <thead className={"table-sm"}>
          <tr>
            <th className={"bg-primary bg-opacity-10 col-1 ps-4"} scope="col">#</th>
            <th className={"bg-primary bg-opacity-10 col-3"} scope="col">Title</th>
            <th className={"bg-primary bg-opacity-10 col-3"} scope="col">Description</th>
            <th className={"bg-primary bg-opacity-10 col-2"} scope="col">Time Passed</th>
            <th className={"bg-primary bg-opacity-10 col-2"} scope="col">Time Left</th>
            <th className={"bg-primary bg-opacity-10 col-1"} scope="col"></th>
            <th className={"bg-primary bg-opacity-10 col-1"} scope="col"></th>
          </tr>
          </thead>

          <tbody>
          <List
            items={filteredSortedTasks}
            renderItem={(task, index) => {
              return <TaskListItem task={task} index={index}/>
            }}
          />
          </tbody>

        </table>
      </div>
    </div>
  )
})

