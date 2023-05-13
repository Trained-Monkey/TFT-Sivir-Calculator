import React, { ReactNode } from 'react';
import { useContext, createContext, useState } from 'react';


export const DropdownContext = createContext([])

export default ({ children }: any) => {
  const dropdown: any = useState([false, false, false])

  return <DropdownContext.Provider value={dropdown}>{children}</DropdownContext.Provider>
}