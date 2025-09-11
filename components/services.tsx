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
									<a href="service-details.html">Commercial Expertise</a>
								</h3>
								<p className="box-text">
									We focus on office buildings, warehouses, retail centers, and industrial
									facilities. Our team understands the unique requirements of large-scale
									projects, including safety, efficiency, and minimizing business
									disruption.
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
									<a href="service-details.html">High-Quality Roofing Systems</a>
								</h3>
								<p className="box-text">
									We use top-tier materials such as TPO, EPDM, PVC, and metal roofing
									designed for performance and longevity. Energy-efficient coatings and
									insulation help lower operating costs while improving building
									performance.
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
									<a href="service-details.html">Structural Durability</a>
								</h3>
								<p className="box-text">
									All roofs are built to withstand harsh weather, heavy loads, and daily
									wear. From reinforced membranes to precision installation, every project
									is built for long-term reliability and low maintenance.
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
