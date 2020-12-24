import React, { Component } from "react";

const NavBar = ({ totalCounter }) => {
	return (
		<nav class="navbar navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Navbar{" "}
					<span className="badge badge-pill badge-secondary">
						{totalCounter}
					</span>
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
