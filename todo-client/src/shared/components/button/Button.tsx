import React, { ComponentPropsWithoutRef, FC } from "react"

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
  } = props

  return (
    <button {...props} className={"btn " + (className ? className : "btn-primary")}>
      {children}
    </button>
  )

}
