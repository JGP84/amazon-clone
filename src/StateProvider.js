// setup data layer
// we need this to track the basket

import React, {createContext, useContext, useReducer} from 'react';

// This is the data layer
export const StateContext = createContext();

// Build the provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children} {/* children is the App component */}
    </StateContext.Provider>
);

//This is how use it inside of a component
export const useStateValue = () => useContext(StateContext);
