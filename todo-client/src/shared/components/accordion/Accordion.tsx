import React, { FC } from "react"
import { AccordionItem } from "./AccordionItem"

export interface AccordionProps {
  items: Array<AccordionItem>
}

export const Accordion: FC<AccordionProps> = (props) => {

  const {
    items,
  } = props

  return (
    <div className="accordion mt-4" id={"accordion"}>
      {items.map(item => {
        return <AccordionItem key={item.id} {...item} />
      })}
    </div>
  )
}
