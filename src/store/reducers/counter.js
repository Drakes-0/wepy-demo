import { INCREMENT, DECREMENT, ASYNC_INCREMENT, ASYNC_INCREMENT_DONE } from '../types/counter'

export default function reducer(state = { num: 0, asyncNum: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        num: state.num + 1
      }
    case DECREMENT:
      return {
        ...state,
        num: state.num - 1
      }
    case ASYNC_INCREMENT_DONE:
      console.log('state:')
      console.log(state)
      console.log('action:')
      console.log(action)
      return {
        ...state,
        asyncNum: state.asyncNum + action.payload
      }
    default:
      return state
  }
}