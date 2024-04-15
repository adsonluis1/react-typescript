import { createContext, useContext, useReducer, useRef, useState } from "react";
import { biuldActions } from "./biuld-actions";
import { reducer } from "./reducer";

export const InitialState = {
    counter:0,
    loading:false
}
const CounterContext = createContext()

export const CounterContextProviber = ({children}) => {
    const [state, dispatch] = useReducer(reducer, InitialState)
    const actions = useRef(biuldActions(dispatch))
    
    return <CounterContext.Provider value={[state, actions.current]}>{children}</CounterContext.Provider>
}

export const useCounterContext = () => {
    const context = useContext(CounterContext)
    
    if(typeof context === 'undefined'){
        throw new Error('Context undefined')
    }

    return [...context]
}