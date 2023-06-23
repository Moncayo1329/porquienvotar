import React from "react";

const UpBtn = () => {
	function volverAlPrincipio() {
		// Scroll suave hacia el principio de la página
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	return (
		<>
			<button className="btn btn-lg upBtn" onClick={volverAlPrincipio}>
				Up
			</button>
		</>
	);
};

export default UpBtn;
