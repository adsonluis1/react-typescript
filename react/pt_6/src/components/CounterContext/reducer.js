import * as actionTypes from './actions-types'
import { InitialState } from '.'

export const reducer = (state, action)=>{
    console.log(action);

  switch (action.type) {
    case actionTypes.INCREASE:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.DECREASE:
      return { ...state, counter: state.counter - 1 };
    case actionTypes.RESET:
      return { ...InitialState };
    case actionTypes.SET_COUNTER:
      return { ...state, ...action.payload };
    case actionTypes.ASYNC_INCREASE_START:
      return { ...state, loading: true };
    case actionTypes.ASYNC_INCREASE_END:
      return { ...state, loading: false, counter: state.counter + 1 };
    case actionTypes.ASYNC_INCREASE_ERROR:
      return { ...state, loading: false };
  }

  return state;
}