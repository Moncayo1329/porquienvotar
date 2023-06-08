import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <header>
        <div>
          <ul className="menu-horizontal">
            <li>
              <a>
                <span style={{ color: 'black' }}>
                  <h4>Por quién votar</h4>
                </span>
              </a>
            </li>
            <li>
              <Link to="/Nosotros">Nosotros</Link>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <div className="App">
          <h4>Aprende qué está detrás de tu voto!</h4>
        </div>

        <h1>Candidatos</h1>

        <div className="Candidatos">
          <ul>
            <li className="Candidatos-1">
              <Link to="/Candidato1"><span style={{ color: 'black' }}>Jan T. Topic</span></Link>
            </li>
            <li className="Candidatos-2">Otto Sonnenholzner</li>
            <li className="Candidatos-3">Leonidas Iza</li>
            <li className="Candidatos-4">Fernando Villaviciencio</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
