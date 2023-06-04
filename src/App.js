import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="menu">
          <ul>
            <li>
              <a>Por quién votar</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
          </ul>
        </div>
        </header>


        <main>

        <div className="App">
          <p>Aprende qué está detrás de tu voto</p>
        </div>

        <h1>Candidatos</h1>

        <div className="Candidatos">
          <ul>
            <li>
              <a href="https://es.wikipedia.org/wiki/Aaron_Swartz" target="_blank" rel="noopener noreferrer">
                Jon Topic
              </a>
            </li>
            <li>Yaku Perez</li>
            <li>Leonidas Iza</li>
            <li>Fernando Villaviciencio</li>
          </ul>
        </div>
        </main>

    </div>
  );
}


export default App;
