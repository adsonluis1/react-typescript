import { createContext, useReducer } from "react";

export const ColorTitleContext = createContext()

export const titleColorReducer = (state, action)=>{
    switch (action.type) {
        case 'AQUA':
            return {...state, color:'aqua'}
        case 'BLUEVIOLET':
            return {...state, color:'blueviolet'}
        case 'BLACK':
            return {...state, color:'black'}    
        default:
            return state
    }
}

export const ColorTitleContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(titleColorReducer,{color:'black'})
    
    return <ColorTitleContext.Provider value={{...state, dispatch} }>{children}</ColorTitleContext.Provider>
}