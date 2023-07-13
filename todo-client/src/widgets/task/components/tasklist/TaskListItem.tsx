import React, {FC, memo, useRef} from "react"
import {observer} from "mobx-react-lite"
import {calculateTaskAge, calculateTaskTimeLeft} from "../../lib"
import {TaskServiceRef} from "../../../../app"
import {TaskService} from "../../api"
import {useService} from "../../../../shared"
import {
    DeleteTaskButton,
    EditableTaskItemCell,
    EditableTaskItemCellRef,
    EditTaskButton, TaskItem,
    TaskMode,
} from "../../../../features"

interface TaskListItemPropType {
    task: TaskItem
    index: number
}

export const TaskListItem: FC<TaskListItemPropType> = observer((props) => {
    const {task, index} = props

    const titleRef = useRef<EditableTaskItemCellRef>(null)
    const descriptionRef = useRef<EditableTaskItemCellRef>(null)

    const isUpdateMode = task.mode === TaskMode.UPDATE

    return (
        <tr className={isUpdateMode ? "table-active" : ""}>
            <th scope="row" className={"ps-4"}>{index + 1}</th>
            <EditableTaskItemCell
                cbRef={titleRef}
                isEditing={isUpdateMode}
                title={task.metadata.description}
            >
                {task.title.substring(0, 100)}
                {task.metadata.description.length > 100 ? "..." : ""}
            </EditableTaskItemCell>

            <EditableTaskItemCell
                cbRef={descriptionRef}
                isEditing={isUpdateMode}
                title={task.metadata.description}
            >
                {task.metadata.description.substring(0, 100)}
                {task.metadata.description.length > 100 ? "..." : ""}
            </EditableTaskItemCell>

            <td className={"border border-2"}>{calculateTaskAge(task.metadata.createdAt)}</td>
            <td className={"border border-2"}>{calculateTaskTimeLeft(task.metadata.deadline)}</td>
            
            <td>
                <DeleteTaskButton {...task} />
            </td>
            <td>
                <EditTaskButton
                    task={task}
                    isUpdateMode={isUpdateMode}
                    titleRef={titleRef}
                    descriptionRef={descriptionRef}
                />
            </td>
        </tr>
    )
})
