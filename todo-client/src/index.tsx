import React from "react"
import { createRoot } from "react-dom/client"
import { App } from "./app/App"
import { init } from "./app"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"

init()

enum TestEslint0 {
  UPPERCASE_KEY = "lowercase"
}

enum TestEslint1 {
  lowerCaseName = "checking",
}

const enum TestEslint2 {
  variableName = "123"
}

enum TestEslint3 {
  // some_NON_STRING_var = 2,
  // some_NON_LITERAL_var = window.document,
  string_var = "2",
}


enum testEslint4 {
  GOOD_KEY = "GOOD_VALUE"
}


const container = document.getElementById("root")
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
