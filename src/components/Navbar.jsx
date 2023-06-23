import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<header>
			<nav className="navbar">
				<div className="container-fluid justify-content-start gap-3 px-2">
					<Link className="navbar-brand" to="/">
						<h6>Por quién votar</h6>
					</Link>

					<ul className="navbar-nav">
						<li className="nav-item`">
							<Link style={{ color: "#46526f" }} to="/Nosotros" className="nav-link">
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
