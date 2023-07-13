import React from "react"

interface HasId {
  id: string;

  [key: string]: any;
}

interface ListProps<T extends HasId> {
  items: Array<T>
  renderItem: (item: T, index: number) => JSX.Element
}

export function List<T extends HasId>(props: ListProps<T>) {
  const {items, renderItem} = props

  return (
    <>
      {items?.map((item, index) => (
        <React.Fragment key={item.id}>
          {renderItem(item, index)}
        </React.Fragment>
      ))}
    </>
  )
}
