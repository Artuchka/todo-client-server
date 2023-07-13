import { navigationStore, PageEntrypoint } from "../../model"
import { runInAction } from "mobx"

export interface NavigationService {
  setRoute: (newRoute: PageEntrypoint) => void
  getRoute: () => PageEntrypoint
}

export class NavigationServiceImpl implements NavigationService {

  setRoute(newRoute: PageEntrypoint) {
    runInAction(() => {
      navigationStore.point = newRoute
    })
  }

  getRoute() {
    return navigationStore.point
  }
}
