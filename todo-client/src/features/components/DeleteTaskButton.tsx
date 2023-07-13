import React, { FC } from "react"
import { Button, useService } from "../../shared"
import { TaskServiceRef } from "../../app"
import { TaskItem } from "../model"
import { TaskService } from "../../widgets"

export const DeleteTaskButton: FC<TaskItem> = ({id}) => {
  const taskService = useService<TaskService>(TaskServiceRef)

  return (
    <Button className={"btn-danger"} onClick={() => taskService.deleteTask(id)}>
      <i className="bi bi-trash3"></i>
    </Button>
  )
}
