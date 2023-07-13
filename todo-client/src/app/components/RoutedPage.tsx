import React from "react"
import { observer } from "mobx-react-lite"
import { AboutPage, MainPage, WordCloudPage } from "../../pages"
import { navigationStore, PageEntrypoint } from "../../widgets"


export const RoutedPage = observer(() => {
  const navigationPoint = navigationStore.point

  const pageBundler = (entrypoint: PageEntrypoint) => {
    switch (entrypoint) {
      case PageEntrypoint.MAIN:
        return <MainPage/>
      case PageEntrypoint.ABOUT:
        return <AboutPage/>
      case PageEntrypoint.WORD_CLOUD:
        return <WordCloudPage/>
    }
  }

  return <>
    {pageBundler(navigationPoint)}
  </>
})
