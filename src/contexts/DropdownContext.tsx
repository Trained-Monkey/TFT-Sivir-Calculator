import { createContext, useState } from 'react';

export const DropdownContext = createContext([])

// const useContext = 

export const Context = ({ children }: any) => {
  const dropdown: any = useState([false, false, false])

  return <DropdownContext.Provider value={dropdown}>{children}</DropdownContext.Provider>
}
export default Context;