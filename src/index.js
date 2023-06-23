import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/App";

import Candidato from "./pages/candidato";

import reportWebVitals from "./reportWebVitals";
import "./styles/App.css";

import "bootstrap/dist/css/bootstrap.css";
import Nosotros from "./pages/Nosotros";

function Main() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/candidato/:candidato" element={<Candidato />} />
				<Route path="/Nosotros" element={<Nosotros />} />
			</Routes>
		</BrowserRouter>
	);
}

const root = createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>
);

reportWebVitals();
