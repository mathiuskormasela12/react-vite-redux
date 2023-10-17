export interface ILikeState {
  like: number
}

export interface LikeReducerAction {
  type: 'LIKE'
  payload: {
    data: {
      value: number
    }
  }
}

type LikeReducer = (state: ILikeState, action: LikeReducerAction) => ILikeState

const initialState: ILikeState = {
  like: 0
}

const likeReducer: LikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LIKE' : {
      return {
        ...state,
        like: state.like + action.payload.data.value
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
}

export default likeReducer
