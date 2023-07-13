import { observable } from "mobx"
import { PageEntrypoint } from "../types"

export const navigationStore = observable({
  point: PageEntrypoint.MAIN,
})
