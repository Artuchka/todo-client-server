import React, { ChangeEvent, useEffect, useId, useRef, useState } from "react"
import { Input, Tooltip, useService } from "../../../../../shared"
import { TaskServiceRef } from "../../../../../app"
import { TaskService } from "../../../api"
import { taskStore } from "../../../model"
import { observer } from "mobx-react-lite"

export const TaskListViewControlFilter = observer(() => {
    const taskService = useService<TaskService>(TaskServiceRef)

    const {searchString} = taskStore

    const filterId = useId()
    const filterHelpId = useId()

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      taskService.setSearchString(e.target.value)
    }

    return (
      <div className="form-group col-3">
        <label htmlFor={filterId} className={"d-flex gap-1 align-items-center"}>
          Filter
          <Tooltip id={filterHelpId} title={"Filter goes in both title and description"}>
            <i className="bi bi-info-circle"></i>
          </Tooltip>
        </label>
        <Input
          type="text"
          className="form-control"
          id={filterId}
          aria-describedby={filterHelpId}
          placeholder="New task..."
          value={searchString}
          onChange={handleSearchChange}
        />
      </div>
    )
  },
)
