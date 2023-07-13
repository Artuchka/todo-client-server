import React, { useEffect } from "react"
import { Navigation } from "../navigation"

export const Header = () => {


  return (
    <header>
      <div className="p-2 bg-primary-subtle rounded-bottom text-lg-center">
        <h1 className="text-primary">Task list</h1>
        <Navigation/>
      </div>
    </header>
  )
}
