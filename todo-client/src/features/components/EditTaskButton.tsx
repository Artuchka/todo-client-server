import React, { FC, MutableRefObject } from "react"
import { Button, useService } from "../../shared"
import { TaskServiceRef } from "../../app"
import { TaskService } from "../../widgets"
import { TaskItem } from "../model"
import { EditableTaskItemCellRef } from "./EditableTaskItemCell"

interface EditTaskButtonProps {
  isUpdateMode: boolean
  task: TaskItem
  titleRef: MutableRefObject<EditableTaskItemCellRef>
  descriptionRef: MutableRefObject<EditableTaskItemCellRef>
}

export const EditTaskButton: FC<EditTaskButtonProps> = (props) => {
  const {
    task,
    isUpdateMode,
    titleRef,
    descriptionRef,
  } = props

  const taskService = useService<TaskService>(TaskServiceRef)
  return (
    <>
      {isUpdateMode ?
        <Button className={"btn-primary"} onClick={() => {
          taskService.taskToIdleMode(task.id)
          taskService.updateTask({
            ...task,
            title: titleRef.current.getInnerText(),
            metadata: {...task.metadata, description: descriptionRef.current.getInnerText()},
          })
        }}>
          <i className="bi bi-check-lg"></i>
        </Button>
        :
        <Button className={"btn-light bg-primary-subtle"}
                onClick={() => taskService.taskToUpdateMode(task.id)}>
          <i className="bi bi-pen text-secondary"></i>
        </Button>
      }
    </>
  )
}
