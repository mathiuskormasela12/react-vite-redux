import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/es/stateReconciler/hardSet'
import likeReducer from './likeReducer'
import persistReducer from 'redux-persist/es/persistReducer'
import counterReducer from './counterReducer'

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['likeReducer']
}

const counterPersistConfig = {
  key: 'counter',
  storage,
  stateReconciler: hardSet
}

const rootReducer = combineReducers({
  likeReducer,
  counterReducer: persistReducer(counterPersistConfig, counterReducer as never)
})

export default persistReducer(rootPersistConfig, rootReducer)
