import React, { FC, ReactNode, useEffect } from "react"

export interface AccordionItem {
  id: string
  header: ReactNode
  body: ReactNode
}

export const AccordionItem: FC<AccordionItem> = (props) => {
  const {
    header,
    body,
    id,
  } = props

  useEffect(() => {
    // throw new Error("some unknow error")
  }, [])

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`}
                aria-expanded="true" aria-controls={`${id}`}>
          {header}
        </button>
      </h2>
      <div id={`${id}`} className="accordion-collapse collapse" data-bs-parent="#accordion">
        <div className="accordion-body">
          {body}
        </div>
      </div>
    </div>
  )
}
