import React from 'react';
import { Link } from 'react-router-dom'; 

function FernandoVillaviciencio() {
    return (
      <div>
        <h1 className="titulo">Fernando Villaviciencio </h1>
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
            <li className="propuestas-1">Seguridad🦺</li>
            <li className="propuestas-2">Bitcoin ₿</li>
            <li className="propuestas-3">Economía</li>
            <li className="propuestas-4">
              <a href="#bitcoin"> <span style={{ color: 'black' }}>Bitcoin</span></a>
            </li>
          </ul>
        </div>
  
        <footer>
          <section id="bitcoin">
            Hola, ¿cómo estás? Estamos hablando de Bitcoin ahora y queremos que esto se solucione muy bien para un futuro descentralizado.
          </section>
        </footer>
      </div>
    );
  }
  
  export default FernandoVillaviciencio;