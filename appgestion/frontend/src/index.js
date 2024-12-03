import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Javascript/Login';
import Register from './Javascript/Register';
import PiezasTaller from './Javascript/PiezasTaller';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>  {/* Envuelve toda la app con BrowserRouter */}
      <Routes>  {/* Usamos Routes para manejar las rutas */}
        <Route path="/GestionInfo" element={<Login />} />  {/* Ruta para la página de login */}
        <Route path="/register" element={<Register />} />  {/* Ruta para la página de registro */}
        <Route path="/pagPrincipal" element={<PiezasTaller/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

