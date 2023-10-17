import { type Store, applyMiddleware, createStore, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { type Persistor, persistStore } from 'redux-persist'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?? compose

type PersistedStore = () => {
  store: Store
  persistor: Persistor
}

const persistedStore: PersistedStore = () => {
  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(
      thunk
    )
  ))

  const persistor = persistStore(store)

  return {
    store,
    persistor
  }
}

export default persistedStore
