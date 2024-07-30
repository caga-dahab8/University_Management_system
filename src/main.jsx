import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserGraduate, faUserTie } from '@fortawesome/free-solid-svg-icons';
import './Style.css'

library.add(faUserGraduate, faUserTie);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
