import React, { ComponentType, ErrorInfo, ReactNode } from "react"
import { Logger } from "../../shared"

export interface ErrorBoundaryProps {
  fallback: ComponentType<{ error: Error, stack: string }>
  logger: Logger
  children: ReactNode
}

export interface ErrorBoundaryState {
  hasError: boolean
  errorInfo: Error
  errorStack: string
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {hasError: false, errorInfo: null, errorStack: null}
  }

  static getDerivedStateFromError(error: Error) {
    return {hasError: true, errorInfo: error}
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.props.logger.output(`${error}, ${errorInfo.componentStack}`)
    this.setState(prev => ({...prev, errorStack: errorInfo.componentStack}))
  }


  render(): ReactNode {
    if (this.state.hasError) {
      return <this.props.fallback error={this.state.errorInfo} stack={this.state.errorStack}/>
    }

    return this.props.children
  }
}
