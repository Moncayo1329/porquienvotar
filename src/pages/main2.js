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
          <li className="propuestas-7">

          <a href="#Calidaddevida "> <span style={{ color: 'black' }}> Calidad de vida 👨‍👩‍👦</span></a>
            </li>
          <li className="propuestas-8">
          <a href="#Vivienda "> <span style={{ color: 'black' }}> Vivienda 🏠</span></a>
            </li>
          <li className="propuestas-9">
          <a href="#PoliticasdeGénero "> <span style={{ color: 'black' }}> Politicas de Género 👩</span></a>
            </li>
          <li className="propuestas-10">
          <a href="#Politicaexterior "> <span style={{ color: 'black' }}> Politica exterior 🗺️</span></a>
            </li>
          <li className="propuestas-11">
          <a href="#MigraciónEcuatoriana "> <span style={{ color: 'black' }}>  Migración Ecuatoriana ✈️</span></a>
          </li>
          <li className="propuestas-12">
          <a href="#TransiciónEcológica "> <span style={{ color: 'black' }}> Transición Ecológica 🌎</span></a>
            </li>
          <li className="propuestas-13">
          <a href="#BienestarAnimal"> <span style={{ color: 'black' }}>  Bienestar Animal 🐕</span></a>
            </li>
          <li className="propuestas-14">
          <a href="#Empleo"> <span style={{ color: 'black' }}>  Empleo 💼</span></a>
            </li>
          <li className="propuestas-15">
          <a href="#EstimuloalaInversión "> <span style={{ color: 'black' }}> Estimulo a la Inversión 🏦</span></a>
            </li>
          <li className="propuestas-16">
          <a href="#Liquidez "> <span style={{ color: 'black' }}> Liquidez 💸</span></a>
            </li>
          <li className="propuestas-17">
          <a href="#CrecimientoEconómico"> <span style={{ color: 'black' }}> Crecimiento Económico📈</span></a>
            </li>
          <li className="propuestas-18">
          <a href="#Inversiones"> <span style={{ color: 'black' }}> Inversiones💱</span></a>
            </li>
          <li className="propuestas-19">
          <a href="#Emprendimiento "> <span style={{ color: 'black' }}>Emprendimiento 💻</span></a>
            </li>
          <li className="propuestas-20">
          <a href="#Agricultura "> <span style={{ color: 'black' }}> Agricultura🚜</span></a>
            </li>
          <li className="propuestas-21">
          <a href="#Empresa"> <span style={{ color: 'black' }}> Empresa🏭</span></a>
            </li>
          <li className="propuestas-22">
          <a href="#ReformaTributarias "> <span style={{ color: 'black' }}> Reforma Tributarias 🎖️</span></a>
            </li>
          <li className="propuestas-23">
          <a href="#Turismo"> <span style={{ color: 'black' }}>Turismo 🏞️</span></a>
            </li>
          <li className="propuestas-24">
          <a href="#Fortalecimiento "> <span style={{ color: 'black' }}> Fortalecimiento💪</span></a>
            </li>
          <li className="propuestas-25">
          <a href="#Conectividad  "> <span style={{ color: 'black' }}> Conectividad 🛰️</span></a>
            </li>
          <li className="propuestas-26">
          <a href="#Corrupción "> <span style={{ color: 'black' }}> Corrupción 🥊</span></a>
          </li>
          <li className="propuestas-27">
          <a href="#Legislación "> <span style={{ color: 'black' }}>  Legislación ⚖️</span></a>
            </li>
         
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
