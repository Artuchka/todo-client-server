import React from "react"
import { TaskListViewControlFilter } from "./TaskListViewControlFilter"
import { TaskListViewControlSortType } from "./TaskListViewControlSortType"

export const TaskListViewControls = () => {
  return (
    <div className="row d-flex align-items-start justify-content-center">
      <TaskListViewControlSortType/>
      <TaskListViewControlFilter/>
    </div>
  )
}
