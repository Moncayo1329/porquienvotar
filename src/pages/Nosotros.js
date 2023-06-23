import React from "react";
import gfrancv from "../assets/gfrancv.jpg";
import moncayo from "../assets/moncayo.png";
import Navbar from "../components/Navbar";

const Nosotros = () => {
	return (
		<>
			<Navbar />
			<div className="container mt-5 pb-5">
				<h1 className="text-center">¿Conoce quien esta detras de la web?</h1>

				<div className="row mt-5 g-3">
					<div className="col-3">
						<img className="w-100" src={gfrancv} alt="GFrancV" />
					</div>
					<div className="col">
						<h2>GFrancV</h2>
						<div>
							<a href="https://github.com/GFrancV">Github - GFrancV</a>
						</div>
					</div>
				</div>

				<div className="row mt-5 g-3">
					<div className="col-3">
						<img className="w-100" src={moncayo} alt="moncayo" />
					</div>
					<div className="col">
						<h2>Michael Moncayo</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export default Nosotros;
