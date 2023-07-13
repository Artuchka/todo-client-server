import React, {ChangeEvent, FormEvent, MouseEvent, useCallback, useId, useState} from "react"
import {observer} from "mobx-react-lite"
import {Button, deepClone, Input, Select, SelectOptionList, SpinningLoader, useService} from "../../../../shared"
import {TaskServiceRef} from "../../../../app"
import {TaskItem} from "../../../../features"
import {TaskService} from "../../api"
import {makeEmptyTask} from "../../lib"
import {taskStore} from "../../model"


export const TaskInput = observer(function TaskInput() {
    const titleId = useId()
    const titleHelpId = useId()
    const descriptionId = useId()
    const priorityLevelId = useId()
    const priorityId = useId()

    const taskService = useService<TaskService>(TaskServiceRef)

    const [newTask, setNewTask] = useState<TaskItem>(makeEmptyTask)

    const isLoading = taskStore.isLoading
    const isAddEnabled = newTask.title !== "" && newTask.metadata.description !== ""

    const handleAddTask = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        taskService.addTask(deepClone(newTask))
        setNewTask(makeEmptyTask())
    }

    const handleTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setNewTask((prev: TaskItem) => ({...prev, title: e.target.value}))
    }, [])

    const handleDescriptionChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => setNewTask((prev: TaskItem) => ({
        ...prev,
        metadata: {...prev.metadata, description: e.target.value},
    })), [])

    const handlePriorityCheckboxChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setNewTask((prev: TaskItem) => ({
            ...prev,
            metadata: {...prev.metadata, priority: prev.metadata.priority === 0 ? 1 : 0},
        }))
    }, [])

    const handlePriorityLevelChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setNewTask((prev: TaskItem) => ({
            ...prev,
            metadata: {...prev.metadata, priority: parseInt(e.target.value)},
        }))
    }, [])

    const priorityLevelOptions: SelectOptionList = [
        {value: 1, label: "low"},
        {value: 2, label: "medium"},
        {value: 3, label: "high"},
    ]

    if (isLoading) {
        return <SpinningLoader/>
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={handleAddTask} className="d-flex gap-2 flex-column">

                        <div className="form-group form-floating">
                            <Input
                                type="text"
                                className="form-control"
                                id={titleId}
                                aria-describedby={titleHelpId}
                                placeholder="New task..."
                                value={newTask.title}
                                onChange={handleTitleChange}
                            />
                            <label htmlFor={titleId}>Title</label>
                            <small
                                id={titleHelpId}
                                className="form-text text-muted"
                            >
                                We'll never share your info with anyone else.
                            </small>
                        </div>

                        <div className="form-group form-floating">
              <textarea
                  className="form-control textarea"
                  style={{height: "100px"}}
                  id={descriptionId}
                  placeholder="Description"
                  value={newTask.metadata.description}
                  onChange={handleDescriptionChange}
              />
                            <label htmlFor={descriptionId}>Description</label>
                        </div>

                        <div className="form-check">
                            <Input
                                type="checkbox"
                                className="form-check-input"
                                checked={newTask.metadata.priority > 0}
                                onChange={handlePriorityCheckboxChange}
                                id={priorityId}
                            />
                            <label
                                className="form-check-label"
                                htmlFor={priorityId}
                            >
                                Has priority
                            </label>
                        </div>

                        <div className="form-group" hidden={newTask.metadata.priority <= 0}>
                            <label htmlFor={priorityLevelId}>Category</label>
                            <Select
                                value={newTask.metadata.priority}
                                id={priorityLevelId}
                                options={priorityLevelOptions}
                                onChange={handlePriorityLevelChange}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="btn-primary d-flex gap-1 justify-content-center"
                            onClick={handleAddTask}
                            disabled={!isAddEnabled}
                        >
                            Add
                            <i className="bi bi-plus-circle"></i>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
})
