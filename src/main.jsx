import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Login.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/App" element={<App />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>

  </React.StrictMode>,
)
