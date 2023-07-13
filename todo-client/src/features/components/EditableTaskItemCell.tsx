import React, {
    ComponentProps,
    FC,
    ReactNode,
    RefObject, useCallback, useImperativeHandle,
    useRef,
} from "react"

export interface EditableTaskItemCellRef {
    getInnerText: () => string
}

interface EditableTaskItemCellProps extends ComponentProps<"td"> {
    children?: ReactNode
    isEditing: boolean
    cbRef?: RefObject<EditableTaskItemCellRef>
}

export const EditableTaskItemCell: FC<EditableTaskItemCellProps> = (props) => {
    const {children, isEditing, cbRef, ...restProps} = props

    const cellRef = useRef(null)

    const getInnerText = useCallback(() => {
        return cellRef.current.textContent
    }, [])

    useImperativeHandle(cbRef, () => ({
        getInnerText,
    }))

    return (
        <td
            {...restProps}
            ref={cellRef}
            className={isEditing ? "border border-2 border-primary" : "border border-2"}
            contentEditable={isEditing}
            suppressContentEditableWarning={true}>
            {children}
        </td>
    )
}
