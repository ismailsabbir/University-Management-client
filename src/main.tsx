import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.tsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.tsx'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={routes}/>
    </PersistGate>
    </Provider>
  
  </React.StrictMode>,
)
