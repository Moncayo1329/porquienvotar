import Markdown from 'markdown-to-jsx';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function JanTTopic() {

const [JanTTopicContent, setJanTTopicContent] = useState("");
  
  
  useEffect(() => {
   
    
    import("../markdown/article.md")
      .then((res) => {
        return fetch(res.default);
      })
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setJanTTopicContent(text);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
      <h1 className="titulo">Jan T. Topic</h1>
      <h2>Propuestas</h2>

      <header>
        <div>
          <ul className="menu-horizontal">
            <li>
              <Link to="/">
                <span style={{ color: 'black' }}>
                  <h4>Por quién votar</h4>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/Nosotros">Nosotros</Link>
            </li>
          </ul>
        </div>
      </header>

      <div className="Propuestas">
        <ul>
          <li className="propuestas-1">
          <a href="#Seguridad"> <span style={{ color: 'black' }}> Seguridad🦺</span></a> 
            </li>
         <li className="propuestas-2">
         <a href="#Instituciones"> <span style={{ color: 'black' }}>Instituciones 🏛️</span></a> 
          
          </li>
        <li className="propuestas-3">
        <a href="#Económico"> <span style={{ color: 'black' }}> Económico 💰</span> </a>
          </li>
          <li className="propuestas-4">
          <a href="#Social"> <span style={{ color: 'black' }}>Social 🚶‍♂️</span> </a>
          </li>
          <li className="propuestas-5">
          <a href="#LibredeDrogas"> <span style={{ color: 'black' }}> Libre de Drogas 🔫</span> </a>
            </li>
          <li className="propuestas-6">
          <a href="#Educación "> <span style={{ color: 'black' }}> Educación 🏫</span></a>
            </li>
          <li className="propuestas-7">Calidad de vida 👨‍👩‍👦</li>
          <li className="propuestas-8">Vivienda 🏠</li>
          <li className="propuestas-9">Politicas de Género 👩</li>
          <li className="propuestas-10">Politica exterior 🗺️</li>
          <li className="propuestas-11">Migración Ecuatoriana ✈️</li>
          <li className="propuestas-12">Transición Ecológica 🌎</li>
          <li className="propuestas-13">Bienestar Animal 🐕</li>
          <li className="propuestas-14">Empleo 💼</li>
          <li className="propuestas-15">Estimulo a la Inversión 🏦</li>
          <li className="propuestas-16">Liquidez 💸</li>
          <li className="propuestas-17">Crecimiento Económico📈</li>
          <li className="propuestas-18">Inversiones💱</li>
          <li className="propuestas-19">Emprendimiento 💻</li>
          <li className="propuestas-20">Agricultura🚜</li>
          <li className="propuestas-21">Empresa🏭</li>
          <li className="propuestas-22">Reforma Tributarias 🎖️</li>
          <li className="propuestas-23">Turismo 🏞️</li>
          <li className="propuestas-24">Fortalecimiento💪</li>
          <li className="propuestas-25">Conectividad 🛰️</li>
          <li className="propuestas-26">Corrupción 🥊</li>
          <li className="propuestas-27">Legislación ⚖️</li>
         
        </ul>
      </div>

     

      <footer>
        <section id="Seguridad">
       <Markdown>{JanTTopicContent}</Markdown>
        </section>
        <section id="Instituciones">
        </section>
</footer>

        
        

    </div>
  );
}

export default JanTTopic;
