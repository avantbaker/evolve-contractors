import React from 'react';

function ModileMenu() {
	return (
		<div className="th-menu-wrapper onepage-nav">
			<div className="th-menu-area text-center">
				<button className="th-menu-toggle">
					<i className="fal fa-times" />
				</button>
				<div className="mobile-logo">
					<a href="index.html">
						<img src="/img/evolve-logo-optimized.webp" alt="Evolve Contractors" />
					</a>
				</div>
				<div className="th-mobile-menu allow-natural-scroll">
					<ul>
						{/* <li className="menu-item-has-children">
							<a href="#hero">Home</a>
							<ul className="sub-menu">
								<li className="menu-item-has-children">
									<a href="#">Multipage</a>
									<ul className="sub-menu">
										<li>
											<a href="index.html">Commercial Construction</a>
										</li>
										<li>
											<a href="home-2.html">Modern Construction</a>
										</li>
										<li>
											<a href="home-3.html">Industrial Solutions</a>
										</li>
										<li>
											<a href="home-4.html">Civil Engineering</a>
										</li>
										<li>
											<a href="home-5.html">Classic Construction</a>
										</li>
										<li>
											<a href="home-6.html">Construction Company</a>
										</li>
										<li>
											<a href="home-7.html">Residential Projects</a>
										</li>
										<li>
											<a href="home-8.html">Renovation Services</a>
										</li>
										<li>
											<a href="home-9.html">Modern Architecture</a>
										</li>
										<li>
											<a href="home-10.html">Sustainable Architecture</a>
										</li>
										<a href="home-11.html">Architectural Firm</a>
										<li>
											<a href="home-12.html">Interior Design</a>
										</li>
										<li>
											<a href="home-13.html">Green Building</a>
										</li>
										<li>
											<a href="home-14.html">Urban Planning</a>
										</li>
										<li>
											<a href="home-15.html">High-End Landscaping</a>
										</li>
										<li>
											<a href="home-16.html">Structural Engineering</a>
										</li>{' '}
										--&gt;
									</ul>
								</li>
								<li className="menu-item-has-children">
									<a href="#">Onepage</a>
									<ul className="sub-menu">
										<li>
											<a href="home-1-op.html">Commercial Construction</a>
										</li>
										<li>
											<a href="home-2-op.html">Modern Construction</a>
										</li>
										<li>
											<a href="home-3-op.html">Industrial Solutions</a>
										</li>
										<li>
											<a href="home-4-op.html">Civil Engineering</a>
										</li>
										<li>
											<a href="home-5-op.html">Classic Construction</a>
										</li>
										<li>
											<a href="home-6-op.html">Construction Company</a>
										</li>
										<li>
											<a href="home-7-op.html">Residential Projects</a>
										</li>
										<li>
											<a href="home-8-op.html">Renovation Services</a>
										</li>
										<li>
											<a href="home-9-op.html">Modern Architecture</a>
										</li>
										<li>
											<a href="home-10-op.html">Sustainable Architecture</a>
										</li>
									</ul>
								</li>
							</ul>
						</li> */}
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
				</div>
			</div>
		</div>
	);
}

export default ModileMenu;
