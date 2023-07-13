import React, { useCallback } from "react"
import { NavigationServiceRef } from "../../../../app"
import { List, useService } from "../../../../shared"
import { NavigationService, navigationStore, PageEntrypoint } from "../../../navigation"
import { observer } from "mobx-react-lite"
import { v4 } from "uuid"

const navItems = [
  {id: v4(), label: "Tasks", route: PageEntrypoint.MAIN},
  {id: v4(), label: "Word Cloud", route: PageEntrypoint.WORD_CLOUD},
  {id: v4(), label: "About", route: PageEntrypoint.ABOUT},
]

export const Navigation = observer(() => {
  const navigationService = useService<NavigationService>(NavigationServiceRef)
  const currentRoute = navigationStore.point

  const handleChangeRoute = (newRoute: PageEntrypoint) => {
    navigationService.setRoute(newRoute)
  }

  return (
    <ul className="list-group list-group-horizontal">
      <List
        items={navItems}
        renderItem={(item) => {
          return (
            <li className={"list-group-item list-group-item-action " + (currentRoute === item.route ? "active" : "")}
                onClick={e => handleChangeRoute(item.route)}
            >
              {item.label}
            </li>
          )
        }}
      />
    </ul>
  )
})
