'use client'

import { createContext, useContext, useState } from 'react'

const ExpandedIndexContext = createContext({
  expandedIdx: 0,
  onExpand: (idx: number) => {},
})

export default function ExpandedIndexProvider({ children }: React.PropsWithChildren) {
  const [expandedIdx, setExpandedIdx] = useState(0)

  return (
    <ExpandedIndexContext.Provider value={{ expandedIdx, onExpand: setExpandedIdx }}>
      {children}
    </ExpandedIndexContext.Provider>
  )
}

export function useExpandedIndex() {
  return useContext(ExpandedIndexContext)
}