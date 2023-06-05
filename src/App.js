import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        
        <div>
        <ul className="menu-horizontal">

          <li>
              <a><span style={{ color: 'black' }}><h4>Por quién votar</h4></span></a></li>
              <li> <a href="#">Nosotros</a></li>
              </ul>
        </div>


       
        </header>


        <main>

        <div className="App">
          <h4>Aprende qué está
            detrás de tu voto!</h4>
        </div>

        <h1>Candidatos</h1>

        <div className="Candidatos">
          <ul>
            <li className="Candidatos-1">
              <a href="https://es.wikipedia.org/wiki/Aaron_Swartz" target="_blank" rel="noopener noreferrer">
                Jon Topic
              </a>
            </li>
            <li className="Candidatos-2">Yaku Perez</li>
            <li className="Candidatos-3">Leonidas Iza</li>
            <li className="Candidatos-4">Fernando Villaviciencio</li>
          </ul>
        </div>
        </main>

    </div>
  );
}


export default App;
