import { createContext } from "react"

export const GlobalStore = createContext()

export default function MainStore({children}) {


    const data = {

    }
  return (
    <GlobalStore.Provider value={data}>
        {children}
    </GlobalStore.Provider>
    
  )
}
