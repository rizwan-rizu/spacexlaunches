import { createContext, useState } from 'react'
import { iRocketsProps } from '../dashboard/rockets/interface'
import { getStorageItem } from '../utility'

export const StoreContext = createContext<any>({})

const StoreProvider = (props: any) => {
  const [toggle, setToggle] = useState<boolean>(false)
  const [layout, setLayout] = useState<string>(getStorageItem('layout') ?? "withSideNav")
  const [rockets, setRockets] = useState<iRocketsProps[]>([])
  const [launches, setLaunches] = useState<any[]>([])
  const [launchPads, setLaunchPads] = useState<any[]>([])
  const [upcomingLaunches, setUpcomingLaunches] = useState<any[]>([])

  const store = {
    app: { layout, setLayout },
    sidebar: { toggle, setToggle },
    rocket: { rockets, setRockets },
    launch: { launches, setLaunches },
    launchPad: { launchPads, setLaunchPads },
    upcomingLaunch: { upcomingLaunches, setUpcomingLaunches },
  }

  return <StoreContext.Provider value={store}>{props.children}</StoreContext.Provider>
}

export default StoreProvider