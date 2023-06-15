import React from 'react';
import { Link } from 'react-router-dom';





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
      </div>
         
  
  
    )
  }
  

  
  export default Nosotros;