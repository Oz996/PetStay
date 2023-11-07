"use client"

import { createContext } from "react"


export const RentalContext = createContext()

export const RentalContextProvider = ({children}) => {
  return (
      <RentalContext.Provider value={{}}>
        {children}
    </RentalContext.Provider>
  )
}

export default RentalContext