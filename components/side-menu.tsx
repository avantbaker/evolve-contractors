import React from 'react';

function SideMenu() {
	return (
		<div className="sidemenu-wrapper sidemenu-info d-none d-lg-block ">
			<div className="sidemenu-content">
				<button className="closeButton sideMenuCls">
					<i className="far fa-times" />
				</button>
				<div className="widget  ">
					<div className="th-widget-about">
						<div className="about-logo">
							<a href="/">
								<img src="/img/evolve-logo-optimized.webp" alt="Evolve Contractors" />
							</a>
						</div>
						{/* <p className="about-text">
							{' '}
							Rapidiously myocardinate cross-platform intellectual capital model.
							Appropriately create interactive infrastructures
						</p> */}
					</div>
				</div>
				<div className="widget  ">
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
										href="mailto:info@evolve-contractors.com?subject=Inquiry from Evolve Contractors"
										className="info-box_link"
									>
										info@evolve-contractors.com
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
				{/* <div className="widget newsletter-widget  ">
					<h3 className="widget_title">Subscribe Now</h3>
					<form className="newsletter-form">
						<div className="form-group">
							<input className="form-control" type="email" placeholder="Email Address" />
							<button type="submit" className="th-btn">
								<i className="far fa-paper-plane text-theme" />
							</button>
						</div>
					</form>
					<div className="th-social style2">
						<a href="https://www.facebook.com/">
							<i className="fab fa-facebook-f" />
						</a>
						<a href="https://www.twitter.com/">
							<i className="fab fa-twitter" />
						</a>
						<a href="https://www.linkedin.com/">
							<i className="fab fa-linkedin-in" />
						</a>
						<a href="https://www.behance.com/">
							<i className="fab fa-behance" />
						</a>
						<a href="https://www.vimeo.com/">
							<i className="fab fa-vimeo-v" />
						</a>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default SideMenu;
