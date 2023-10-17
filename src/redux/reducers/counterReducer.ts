import { type Reducer } from 'redux'

export interface ICounterState {
  count: number
}

export interface CounterReducerAction {
  type: 'INCREMENT'
  payload: {
    data: {
      value: number
    }
  }
}

const initialState: ICounterState = {
  count: 0
}

const counterReducer: Reducer<ICounterState, CounterReducerAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT' : {
      return {
        ...state,
        count: state.count + action.payload.data.value
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
}

export default counterReducer
