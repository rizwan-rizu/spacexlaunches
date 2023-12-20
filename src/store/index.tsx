import { createContext, useState } from 'react'
import { iRocketsProps } from '../dashboard/rockets/interface'

export const StoreContext = createContext<any>({})

const StoreProvider = (props: any) => {
  const [toggle, setToggle] = useState<boolean>(false)
  const [rockets, setRockets] = useState<iRocketsProps[]>([])
  const [launches, setLaunches] = useState<any[]>([])

  const store = {
    sidebar: { toggle, setToggle },
    rocket: { rockets, setRockets },
    launch: { launches, setLaunches }
  }

  return <StoreContext.Provider value={store}>{props.children}</StoreContext.Provider>
}

export default StoreProvider