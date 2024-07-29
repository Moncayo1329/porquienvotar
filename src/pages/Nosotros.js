import React from "react";
import gfrancv from "../assets/gfrancv.jpg";
import moncayo from "../assets/moncayo.png";
import Navbar from "../components/Navbar";
import {  FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';



const Nosotros = () => {
	return (
		<>
			<Navbar />
			<div className="container mt-5 pb-5">
				<h1 className="text-center">¿Conoce quién está detrás de la web?</h1>

				<div className="row mt-5 g-3">
					<div className="col-3">
						<img className="w-100" src={moncayo} alt="moncayo" />
					</div>
					<div className="col-md-6 text-center" style={{ color: '#46526f' }}>
						<h2>Michael Moncayo</h2>
						<p>Este sitio web fue creado por Michael Moncayo.  
						Creé este sitio web con el objetivo de presentar los temas importantes de los candidatos a Presidente.
				   Me di cuenta de que muchas personas no leen las propuestas presidenciales y por lo tanto no sabemos  por qué votamos realmente y qué está en juego, 
				y creo que es muy importante estar informado de lo que votamos  y de esa manera tener una mejor elección de nuestras autoridades.
			     Votar.in está diseñado para estar libre de información errónea y ser un trampolín para el aprendizaje futuro.<br></br> Quiero  agradecer a Martin Machado, Romina Sanchez, Jorge baldeon y mi primo Pablo Andrés León por su feedback y su apoyo. También a las personas que están utilizando la website. </p>
				 <a href="https://twitter.com/MichaelMoncay7" className="text-decoration-none"> < FaTwitter/> @michaelmoncayo7</a> <br></br>
				 <a href="https://instagram.com/michaelmoncayo7?igshid=OGQ5ZDc2ODk2ZA==" className="text-decoration-none" style={{ color: '#FF0000' }}> < FaInstagram/> @michaelmoncayo7</a> <br></br>
				 <a href="https://github.com/Moncayo1329" className="text-decoration-none" style={{ color: '#00008B' }}> < FaGithub/> @Moncayo1329</a><br></br>
				 <a href="mailto:moncayomichael23@gmail.com" className="text-decoration-none" style={{ color: '#404040' }}> <  MdEmail /> moncayomichael23@gmail.com</a>	
					
					
					</div>

				<div className="row mt-5 g-3">
					<div className="col-3">
						<img className="w-100" src={gfrancv} alt="GFrancV" />
					</div>
					<div className="col-md-6 text-center" style={{ color: '#46526f' }}>
						<h2>GFrancV</h2>
						<div>
							<p>Gabriel ha sido de gran ayuda, no solo con este sitio web, sino con todo en general.

Si no puedo descifrar cómo codear algo, Gabriel se toma un tiempo de su ajetreado día para hacerme ejemplos de códigos personalizados y guiarme a través de la complejidad del desarrollo de software.

¡Este sitio web no podría haber existido sin su ayuda!</p>
   <a href="https://github.com/GFrancV" className="text-decoration-none" style={{ color: '#00008B' }}> < FaGithub/> @GFrancV</a>
						</div>
					</div>
				</div>

				</div>
			</div>
		</>
	);
};

export default Nosotros;
