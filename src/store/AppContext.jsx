import React from 'react';
import { createContext, useState } from 'react';

export const GlobalContext = createContext(null);

const AppContext = ({children}) => {

  const [showModal, setShowModal] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [icons1, setIcons1] = useState(false);
  const [icons2, setIcons2] = useState(false);

  return (

    <GlobalContext.Provider value={{
      showIcon, showModal, 
      setShowIcon, setShowModal,
      icons1, icons2,
      setIcons1, setIcons2  
    }}>
      {children}
    </GlobalContext.Provider>

  )

}

export default AppContext;