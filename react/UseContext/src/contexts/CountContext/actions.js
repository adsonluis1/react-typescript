import * as types from './types'

export const incrementCounter = (dispatch) => {
    dispatch({type: types.INCREMENT})
}

export const decrementCounter = (dispatch) => {
    dispatch({type: types.UNCREMENT})
}