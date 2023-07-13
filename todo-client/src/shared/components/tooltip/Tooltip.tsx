import React, { ComponentProps, FC, useEffect, useRef } from "react"
import { Tooltip as BootstrapTooltip } from "bootstrap"

interface TooltipProps extends ComponentProps<"span"> {
  title: string
}

export const Tooltip: FC<TooltipProps> = (props) => {

  const tooltipRef = useRef(null)

  useEffect(() => {
    if (!tooltipRef.current) {
      return
    }

    const tooltip = new BootstrapTooltip(tooltipRef.current, {
      title: props.title,
      placement: "right",
      trigger: "hover",
    })

    return () => {
      tooltip.dispose()
    }
  }, [])

  return (
    <span {...props} className={"info-icon form-text text-muted"} ref={tooltipRef}>
      {props.children}
    </span>
  )
}
