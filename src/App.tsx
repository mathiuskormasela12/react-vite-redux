import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import persistedStore from './redux/store'

const App: React.FC = () => {
  const { store, persistor } = persistedStore()

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
