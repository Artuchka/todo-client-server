import React from "react"
import { TaskInput, TaskList, TaskListViewControls } from "../../../widgets"

export const MainPage = () => {
  return (
    <main className="container d-flex flex-column gap-lg-3">
      <TaskInput/>
      <TaskListViewControls/>
      <TaskList/>
    </main>
  )
}
