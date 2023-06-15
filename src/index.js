import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/App';
import reportWebVitals from './reportWebVitals';
import './styles/App.css';
import Nosotros from './pages/main1';
import JanTTopic from './pages/main2'; 
import OttoSonnenholzner from './pages/main3'; 
import XavierHervas from './pages/main4';
import FernandoVillaviciencio from './pages/main5';
import DanielNoboa  from './pages/main6';
import BolivarArmijos from './pages/main7';
import YakuPerez from './pages/main8';
import LuisaGonzalez from './pages/main9';



function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/JanTTopic" element={<JanTTopic />} />
        <Route path="/OttoSonnenholzner" element={<OttoSonnenholzner />} />
        <Route path="/XavierHervas" element={<XavierHervas />} />
        <Route path="/FernandoVillaviciencio" element={<FernandoVillaviciencio />} />
        <Route path="/DanielNoboa" element={<DanielNoboa />} />
        <Route path="/BolivarArmijos" element={<BolivarArmijos />} />
        <Route path="/YakuPerez" element={<YakuPerez />} />
        <Route path="/LuisaGonzalez" element={<LuisaGonzalez />} />
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
