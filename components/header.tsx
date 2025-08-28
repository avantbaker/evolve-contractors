import React from 'react';

function Header() {
	return (
		<header className="th-header header-layout1 onepage-nav">
			<div className="sticky-wrapper">
				{/* Main Menu Area */}
				<div className="menu-area">
					<div className="container">
						<div className="row align-items-center justify-content-between">
							<div className="col-auto">
								<div className="header-logo">
									<a href="index.html">
										<img src="/img/evolve-logo-optimized.webp" alt="Builda" />
									</a>
								</div>
							</div>
							<div className="col-auto">
								<nav className="main-menu d-none d-lg-inline-block">
									<ul>
										<li>
											<a href="#about-sec">About Us</a>
										</li>
										<li>
											<a href="#service-sec">Service</a>
										</li>
										<li>
											<a href="#team-sec">Team</a>
										</li>
										<li>
											<a href="#blog-sec">Blog</a>
										</li>
										<li>
											<a href="#contact-sec">Contact Us</a>
										</li>
									</ul>
								</nav>
								<div className="header-button d-flex d-lg-none">
									<button
										type="button"
										className="th-menu-toggle sidebar-btn bg-transparent"
									>
										<span className="line" />
										<span className="line" />
										<span className="line" />
									</button>
								</div>
							</div>
							<div className="col-auto d-none d-xl-block">
								<div className="header-button">
									<a href="contact.html" className="th-btn btn-mask th-btn-icon">
										Contact Us
									</a>
									<button type="button" className="simple-icon sideMenuInfo sidebar-btn">
										<span className="line" />
										<span className="line" />
										<span className="line" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
