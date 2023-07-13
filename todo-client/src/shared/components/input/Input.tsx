import React, { FC } from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

export const Input: FC<InputProps> = (props) => {
  return (
    <input {...props} />
  )
}
