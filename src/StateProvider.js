import React, {createContext, useContext, useReducer} from 'react';

// Preparing the data layer
export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children} {/* refers to App */}
  </StateContext.Provider>
)

// Hook that lets us pull info from the data layer
export const useStateValue = () => useContext(StateContext);