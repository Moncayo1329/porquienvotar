import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/App';
import reportWebVitals from './reportWebVitals';
import './styles/App.css';
import Nosotros from './pages/main1';
import Candidato1 from './pages/main2';



function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Candidato1" element={<Candidato1 />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

reportWebVitals();
