import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

console.log('main.jsx is loading...')

const root = ReactDOM.createRoot(document.getElementById('root'))
console.log('Root element found:', document.getElementById('root'))

root.render(
  <App />
)