import React from "react"
import { Header } from "../widgets"
import { ErrorBoundary, RoutedPage } from "./components"
import { ErrorBoundaryFallback } from "./components/ErrorBoundaryFallback"
import { Logger, useService } from "../shared"
import { ErrorBoundaryLoggerRef } from "./const"
import "./styles/global.scss"


export function App() {
  const consoleLogger = useService<Logger>(ErrorBoundaryLoggerRef)
  
  return (
    <ErrorBoundary fallback={ErrorBoundaryFallback} logger={consoleLogger}>
      <div className={"bg-primary bg-opacity-10 pb-xl-5"} style={{minHeight: "110vh"}}>
        <div className="container d-flex flex-column gap-lg-5">
          <Header/>
          <RoutedPage/>
        </div>
      </div>
    </ErrorBoundary>
  )
}

