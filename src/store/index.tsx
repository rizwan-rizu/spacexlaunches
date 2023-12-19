import { createContext, useState } from 'react'

export const StoreContext = createContext<any>({})

const StoreProvider = (props: any) => {
  const [toggle, setToggle] = useState<boolean>(false)
  const [user, setUser] = useState<{ [key: string]: any }>({})
  const [lookupList, setLookupList] = useState<{ [key: string]: any }>({})

  const store = {
    sidebar: { toggle, setToggle },
    employee: { user, setUser },
    lookup: { lookupList, setLookupList }
  }

  return <StoreContext.Provider value={store}>{props.children}</StoreContext.Provider>
}

export default StoreProvider