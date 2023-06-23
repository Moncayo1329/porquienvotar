import React from 'react';
import { Link } from 'react-router-dom';
import imagen from '../assets/imagen3.jpg';

function Nosotros() {
    return (
      
     
        <div>
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


        <div>
          <img src={imagen} alt='descripcion' /> 
        </div>

        <div>
       <p>hello</p>

        </div>
        











      </div>

     
         
  
  
    )
  }
  

  
  export default Nosotros;