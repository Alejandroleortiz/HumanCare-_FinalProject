import React, { createContext, useEffect, useState } from 'react';
import getState from './Flux';

export const GlobalContext = createContext(null);

const injectContext = (PassComponent) => {

  const StoreWrapper = (props) => {

    const [state, setState] = useState(getState({
      getStore: () => state.store, //Encargado de devolver todo lo que esta en el state (store)
      getActions: () => state.actions, // Encargado de devolver todo lo que esta en el state (actions)
      setStore: (updateStore) => setState({
        store: Object.assign(state.store, updateStore), // Sumar dos objetos y generar uno nuevo
        actions: { ...state.actions }
      }), // setear el state
    }));

    useEffect(() => {
      // Aqui coloco las funciones que quiero que se ejecuten una vez cargadas las imagenes
      state.actions.checkCurrentUser()
      state.actions.getPatients()
      // state.actions.deletePatient()
    }, [])

    useEffect(() => {
      // Aqui coloco las funciones que quiero que se ejecuten una vez cargadas las imagenes
      state.actions.checkCurrentPatients()
    }, [])


    const [showModal, setShowModal] = useState(true);
    const [showIcon, setShowIcon] = useState(false);
    const [icons1, setIcons1] = useState(false);
    const [icons2, setIcons2] = useState(false);

    return (
      <GlobalContext.Provider value={{
        showIcon, showModal,
        setShowIcon, setShowModal,
        icons1, icons2,
        setIcons1, setIcons2,
        state
      }}>
        <PassComponent {...props} />
        {props.children}
      </GlobalContext.Provider>
    );
  };

  return StoreWrapper;
};

export default injectContext;
