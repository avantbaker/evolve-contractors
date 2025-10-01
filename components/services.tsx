import React from 'react';

function Services() {
	return (
		<section className="service-area-1 overflow-hidden space-bottom bg-black2 pt-80">
			<div className="container">
				<div className="row gy-40">
					<div className="col-lg-4 col-md-6">
						<div className="service-card">
							<div className="service-card-icon">
								<div className="icon">
									<img src="/img/icon/service-icon1-1.png" alt="Icon" />
								</div>
							</div>
							<div className="box-content">
								<h3 className="box-title">
									<a href="service-details.html">New Construction and Roof Replacement</a>
								</h3>
								<p className="box-text">
									Evolve Contractors specializes in complex commercial roof installations
									and replacements, backed by certifications with all seven major
									manufacturers to ensure top performance and warranty compliance.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="service-card">
							<div className="service-card-icon">
								<div className="icon">
									<img src="/img/icon/service-icon1-2.png" alt="Icon" />
								</div>
							</div>
							<div className="box-content">
								<h3 className="box-title">
									<a href="service-details.html">Roof Maintenance & Repair Services</a>
								</h3>
								<p className="box-text">
									Our proactive maintenance and rapid-response repair programs extend roof
									life, protect assets, and provide transparent digital reporting for
									commercial property owners.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="service-card">
							<div className="service-card-icon">
								<div className="icon">
									<img src="/img/icon/service-icon1-3.png" alt="Icon" />
								</div>
							</div>
							<div className="box-content">
								<h3 className="box-title">
									<a href="service-details.html">Electronic Leak Detection</a>
								</h3>
								<p className="box-text">
									Evolve offers certified electronic leak detection services that deliver
									precise, non-destructive testing to safeguard warranties and prevent
									costly water intrusion.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
