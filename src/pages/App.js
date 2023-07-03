import React , {useEffect}from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ReactGA from "react-ga"; 



function HomePage() {

	useEffect(() => {
		ReactGA.initialize('G-LMDQTYCSWJ')

		ReactGA.pageview('/App');


	  }, []);



	const candidatos = [
		{
			name: "Jan T. Topic",
			link: "JanTTopic",
		},
		{
			name: "Otto Sonnenholzner",
			link: "OttoSonnenholzner",
		},
		{
			name: "Xavier Hervas",
			link: "XavierHervas",
		},
		{
			name: "Fernando Villaviciencio",
			link: "FernandoVillaviciencio",
		},
		{
			name: "Daniel Noboa",
			link: "DanielNoboa",
		},
		{
			name: "Bolívar Armijos",
			link: "BolivarArmijos",
		},
		{
			name: "Yaku Pérez",
			link: "YakuPerez",
		},
		{
			name: "Luisa González",
			link: "LuisaGonzalez",
		},
	];


	return (
		<div>
			<Navbar />

			<main>
				<div className="App">
					<div class="container mt-5 pb-5">
						<h1 className="text-center" style={{ color: '#46526f' }}>
							Aprende qué está <p></p>detrás de tu voto!🗳️
						</h1>

						<h2 className="mt-5 mb-5 text-align-start fs-1" style={{ color: '#46526f' }}>Candidatos</h2>

						<div class="row row-cols-lg-4 row-cols-md-2 row-cols-1 gy-5 gx-3">
							{candidatos.map(candidato => (
								<div class="col">
									<div className="border border-primary p-2 text-center h-100" style={{ color: '#46526f' }}>
										<Link
											to={`/candidato/${candidato.link}`}
											className="text-decoration-none text-black fs-6"
										>
											{candidato.name}
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default HomePage;
