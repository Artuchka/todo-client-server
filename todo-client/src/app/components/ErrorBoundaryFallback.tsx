import React, { FC } from "react"
import { ErrorStackFormatted } from "./ErrorStackFormatted"

interface ErrorBoundaryFallbackProps {
  error?: Error
  stack?: string
}

export const ErrorBoundaryFallback: FC = (props: ErrorBoundaryFallbackProps) => {
  const error = props?.error
  const stack = props?.stack

  return (
    <div className={"container alert alert-danger my-xl-5"}>
      <h1 className={"alert-heading"}>Some error occurred</h1>
      <br/>
      <div>Name: {error?.name}</div>
      <hr/>
      <div>Message: {error?.message}</div>
      <hr/>
      <div className={""}>Component Stack: <ErrorStackFormatted stack={stack}/></div>
    </div>
  )
}
