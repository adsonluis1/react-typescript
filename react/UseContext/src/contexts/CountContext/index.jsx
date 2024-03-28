import React, { useReducer } from 'react'
import { data } from './data'
import { reducer } from './reducer'
import { CountContext } from './context'

export const CountProviber = ({children})=>{
    const [countState, countDispatch] = useReducer(reducer, data)
    return (
        <CountContext.Provider value={{countState, countDispatch}}>
            {children}
        </CountContext.Provider>
    )
}