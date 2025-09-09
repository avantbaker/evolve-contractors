import React from 'react';

function Footer() {
	return (
		<footer className="footer-wrapper footer-layout1 bg-black2">
			<div className="footer-wrap bg-white" data-mask-src="/img/bg/footer-bg-mask.png">
				<div className="widget-area space">
					<div className="container">
						<div className="row justify-content-between">
							<div className="col-md-6 col-xl-4">
								<div className="widget footer-widget">
									<div className="th-widget-about">
										<div className="about-logo">
											<a href="index.html">
												<img src="/img/evolve-logo-optimized.webp" alt="Evolve" />
											</a>
										</div>
										<p className="about-text">
											Protect your investment and boost curb appeal with our certified,
											high-quality commercial roofing services—contact us today for a free
											consultation and reliable results that last.
										</p>
										<div className="th-social style7">
											{/* <a href="https://www.facebook.com/">
												<i className="fab fa-facebook-f" />
											</a> */}
											{/* <a href="https://www.twitter.com/">
												<i className="fab fa-twitter" />
											</a> */}
											<a href="https://www.linkedin.com/company/evolve-contractors-llc/posts/?feedView=all">
												<i className="fab fa-linkedin-in" />
											</a>
											{/* <a href="https://www.youtube.com/">
												<i className="fab fa-youtube" />
											</a> */}
											<a href="https://www.instagram.com/evolve.contractors/">
												<i className="fab fa-instagram" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-auto">
								<div className="widget footer-widget">
									<h3 className="widget_title">Get In Touch</h3>
									<div className="th-widget-contact">
										<div className="info-box_text">
											<div className="icon">
												<img src="/img/icon/location-dot.svg" alt="img" />
											</div>
											<div className="details">
												<p>1122 Old Chattahoochee Ave NW</p>
												<p>Suite A</p>
												<p>Atlanta, GA, USA</p>
											</div>
										</div>
										<div className="info-box_text">
											<div className="icon">
												<img src="/img/icon/phone.svg" alt="img" />
											</div>
											<div className="details">
												<p>
													<a href="tel:+6785150220" className="info-box_link">
														678.515.0220
													</a>
												</p>
												{/* <p>
													<a href="tel:+09876543210" className="info-box_link">
														+09 876 543 210
													</a>
												</p> */}
											</div>
										</div>
										<div className="info-box_text">
											<div className="icon">
												<img src="/img/icon/envelope.svg" alt="img" />
											</div>
											<div className="details">
												<p>
													<a
														href="mailto:channing@evolve-contractors.com?subject=Inquiry from Evolve Contractors"
														className="info-box_link"
													>
														channing@evolve-contractors.com
													</a>
												</p>
												{/* <p>
													<a href="mailto:support24@builda.com" className="info-box_link">
														support24@builda.com
													</a>
												</p> */}
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="d-none col-md-6 col-xl-auto">
								<div className="widget widget_nav_menu footer-widget">
									<h3 className="widget_title">Useful Link</h3>
									<div className="menu-all-pages-container">
										<ul className="menu">
											<li>
												<a href="about.html">About us</a>
											</li>
											<li>
												<a href="service.html">Featured Properties</a>
											</li>
											<li>
												<a href="service.html">Our Best Services</a>
											</li>
											<li>
												<a href="contact.html">Request Visit</a>
											</li>
											<li>
												<a href="contact.html">FAQ</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="d-none col-md-6 col-xl-auto">
								<div className="widget widget_nav_menu footer-widget">
									<h3 className="widget_title">Explore</h3>
									<div className="menu-all-pages-container">
										<ul className="menu">
											<li>
												<a href="service.html">All Properties</a>
											</li>
											<li>
												<a href="team.html">Our Agents</a>
											</li>
											<li>
												<a href="service.html">All Projects</a>
											</li>
											<li>
												<a href="about.html">Our Process</a>
											</li>
											<li>
												<a href="contact.html">Neighborhood</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						{/* <div className="newsletter-wrap style3">
							<h5 className="newsletter-title">
								Newsletter To Get Updated The Latest News
							</h5>
							<form action="#" className="newsletter-form">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Enter Email" />
								</div>
								<button className="th-btn btn-mask">
									Subscribe Now{' '}
									<span className="btn-icon">
										<img src="/img/icon/paper-plane.svg" alt="img" />
									</span>
								</button>
							</form>
						</div> */}
					</div>
				</div>
				<div className="copyright-wrap">
					<div className="container">
						<div className="row gy-2 align-items-center">
							<div className="col-lg-6">
								<p className="copyright-text">
									Copyright <i className="fal fa-copyright" /> 2025{' '}
									<a href="index.html">Evolve Contractors</a>, All rights reserved.
								</p>
							</div>
							<div className="col-lg-6 text-center text-lg-end">
								<div className="footer-links">
									{/* <ul>
										<li>
											<a href="contact.html">Terms of service</a>
										</li>
										<li>
											<a href="contact.html">Privacy policy</a>
										</li>
										<li>
											<a href="contact.html">Cookies</a>
										</li>
									</ul> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
