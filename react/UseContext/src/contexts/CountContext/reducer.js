import * as types from './types'

export const reducer = (state, action)=>{
    switch (action.type) {
        case types.INCREMENT:
            return  {...state, counter: state.counter+1}
        case types.UNCREMENT:
            return {...state, counter: state.counter-1}
        default:
            return state
        }
}