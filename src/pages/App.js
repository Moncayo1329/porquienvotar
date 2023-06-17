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
          <h4>Aprende qué está <p></p>detrás de tu voto!🗳️</h4>
        </div>

        <h1>Candidatos</h1>

        <div className="Candidatos">
          <ul>
            <li className="Candidatos-1">
              <Link to="/JanTTopic"><span style={{ color: 'black' }}>Jan T. Topic</span></Link>
            </li>
             <li className="Candidatos-2">
             <Link to="/OttoSonnenholzner"><span style={{ color: 'black' }}> Otto Sonnenholzner</span></Link>
              </li>
              
            
             <li className="Candidatos-3">
             <Link to="/XavierHervas"><span style={{ color: 'black' }}> Xavier Hervas</span></Link>
              </li>
            


            <li className="Candidatos-4">
              
            <Link to="/FernandoVillaviciencio"><span style={{ color: 'black' }}>Fernando Villaviciencio </span></Link>
              
              </li>

            <li className="Candidatos-5">
              
            <Link to="/DanielNoboa"><span style={{ color: 'black' }}>Daniel Noboa</span></Link>
              
              </li>

            <li className="Candidatos-6">
            <Link to="/BolivarArmijos"><span style={{ color: 'black' }}>Bolívar Armijos</span></Link>
              
              </li>


            <li className="Candidatos-7">
              
            <Link to="/YakuPerez"><span style={{ color: 'black' }}>Yaku Pérez</span></Link>
              
              
              </li>


            <li className="Candidatos-8">
            <Link to="/LuisaGonzalez"><span style={{ color: 'black' }}>Luisa González</span></Link>
            
            </li>


          </ul>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
