import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CallContextProvider } from './contexts/callContext'

ReactDOM.render(
  <React.StrictMode>
    <CallContextProvider>
      <App />
    </CallContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
