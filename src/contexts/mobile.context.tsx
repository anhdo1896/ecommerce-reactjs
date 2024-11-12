import React, { createContext, useState } from 'react'


interface MobileContextInterface {
  isSort: boolean
  setIsSort: React.Dispatch<React.SetStateAction<boolean>>
  isFilter: boolean
  setIsFilter: React.Dispatch<React.SetStateAction<boolean>>
  isSearch: boolean
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>
}

export const getInitialMobileContext: () => MobileContextInterface = () => ({
  isSort: false,
  setIsSort: () => null,
  isFilter: false,
  setIsFilter: () => null,
  isSearch: false,
  setIsSearch: () => null
})

const initialMobileContext = getInitialMobileContext()

export const MobileContext = createContext<MobileContextInterface>(initialMobileContext)

export const MobileProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isSort, setIsSort] = useState<boolean>(initialMobileContext.isSort)
  const [isFilter, setIsFilter] = useState<boolean>(initialMobileContext.isFilter)
  const [isSearch, setIsSearch] = useState<boolean>(initialMobileContext.isSearch)

  return (
    <MobileContext.Provider
      value={{
        isSort,
        setIsSort,
        isFilter,
        setIsFilter,
        isSearch,
        setIsSearch
      }}
    >
      {children}
    </MobileContext.Provider>
  )
}
