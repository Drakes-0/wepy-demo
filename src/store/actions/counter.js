import { ASYNC_INCREMENT, ASYNC_INCREMENT_DONE } from '../types/counter'

// const asyncInc = createAction(ASYNC_INCREMENT, () => (dispatch) => dispatch({ type: ASYNC_INCREMENT_DONE, payload: 1 }))

const asyncInc = () => dispatch => dispatch({ type: ASYNC_INCREMENT_DONE, payload: 1 })
//console.log(asyncInc())

export { asyncInc }