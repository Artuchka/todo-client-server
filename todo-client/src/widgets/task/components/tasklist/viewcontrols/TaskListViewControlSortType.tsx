import React, { ChangeEvent, useId } from "react"
import { Option, Select, useService } from "../../../../../shared"
import { TaskListSort, taskStore } from "../../../model"
import { TaskServiceRef } from "../../../../../app"
import { TaskService } from "../../../api"
import { observer } from "mobx-react-lite"

export const TaskListViewControlSortType = observer(() => {
  const taskService = useService<TaskService>(TaskServiceRef)

  const {sortType} = taskStore

  const sortId = useId()
  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    taskService.setSortType(e.target.value as TaskListSort)
  }

  const sortOptions: Array<Option> = [
    {value: TaskListSort.DEADLINE, label: "by Deadline"},
    {value: TaskListSort.PRIORITY, label: "by Priority"},
    {value: TaskListSort.PRIORITY_AND_DEADLINE, label: "by Priority and Deadline"},
  ]

  return (
    <div className="form-group col-3">
      <label htmlFor={sortId}>Sort Type</label>
      <Select
        options={sortOptions}
        id={sortId}
        value={sortType}
        onChange={handleSortChange}
      />
    </div>
  )
})
