import React, { FC } from "react"

interface ErrorStackFormattedProps {
  stack: string
}

export const ErrorStackFormatted: FC<ErrorStackFormattedProps> = (props) => {

  const {stack} = props

  const formattedStack = stack
    ?.split("at")
    .map(item => item.replace(/(\n|\s)/g, ""))
    .filter(item => !!item)

  return <ul className={"list-group"}>
    {formattedStack?.map((item, index) => {
      return <li key={index} className={"list-group-item list-group-item-action"}>at {item}</li>
    })}
  </ul>
}
