import * as actionTypes from './actions-types'

export const biuldActions = (dispatch) => {
    return {
        increase: () => dispatch({type: actionTypes.INCREASE}),
        decrease: () => dispatch({type: actionTypes.DECREASE}),
        reset: () => dispatch({type: actionTypes.RESET}),
        setCounter: (payload) => dispatch({type: actionTypes.SET_COUNTER, payload}),
        asyncIncreaseStart: () => asyncIncreaseStartFn(dispatch),
        asyncIncreaseError: () => asyncIncreaseErrorFn(dispatch)
    }
}

const asyncIncreaseStartFn = async (dispatch) =>{
    dispatch({type: actionTypes.ASYNC_INCREASE_START})

    return await new Promise( r => {
        setTimeout(()=>{
            dispatch({type: actionTypes.ASYNC_INCREASE_END})
            r('resolved')
        },2000)
    })
}

const asyncIncreaseErrorFn = async (dispatch) => {
    dispatch({type: actionTypes.ASYNC_INCREASE_START})

    return await new Promise((resolve,reject) => {
        setTimeout(() =>{
            dispatch({type: actionTypes.ASYNC_INCREASE_ERROR})
            reject(new Error('Algo deu errado'))
        },2000)
    })
}