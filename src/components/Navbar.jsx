import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<header>
			<nav className="navbar">
				<div className="container-fluid justify-content-start gap-5 px-3">
					<Link className="navbar-brand" to="/">
						<h4>Por quién votar</h4>
					</Link>

					<ul className="navbar-nav">
						<li className="nav-item`">
							<Link style={{ color: "black" }} to="/Nosotros" className="nav-link">
								Nosotros
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
