import React from 'react';

function SpaceOne() {
	return (
		<section className="space bg-black2" id="service-sec">
			<div className="container">
				<div className="row justify-content-between align-items-center">
					<div className="col-lg-6">
						<div className="title-area">
							<span className="shadow-title">Service</span>
							<h2 className="sec-title text-white">We Provide Our Services</h2>
							<p className="sec-text text-white">
								We are a Construction firm with over 20 years of expertise, and our main
								goal is to provide amazing locations to our partners and clients.
							</p>
						</div>
					</div>
					<div className="col-auto">
						<div className="sec-btn">
							{/* <a href="service.html" className="th-btn btn-mask th-btn-icon">
								All Services
							</a> */}
						</div>
					</div>
				</div>
				<div className="property-card-wrap">
					<div
						className="property-thumb img-shine"
						data-mask-src="/img/shape/property-card1-img-mask.png"
					>
						<img src="/img/evolve/services/full-flow.jpg" alt="img" />
					</div>
					<div className="property-card">
						<div className="property-card-number">01 </div>
						<div className="property-card-details">
							<span className="property-card-subtitle">Membrane Systems</span>
							<h4 className="property-card-title">
								<a href="service-details.html">Commercial Membrane TPO, EPDM, PVC</a>
							</h4>
							<p className="property-card-text">
								Installing high-performance membrane roofing systems such as TPO, EPDM,
								and PVC is essential for protecting large commercial properties. These
								materials provide superior weather resistance, energy efficiency, and low
								maintenance, making them a cost-effective solution for warehouses, retail
								centers, and office buildings. With professional installation and durable
								products, your business stays protected and operational no matter the
								conditions.
							</p>
							{/* <div className="property-btn-wrap">
								<a href="service-details.html" className="th-btn btn-mask2 th-btn-icon">
									View Details
								</a>
							</div> */}
						</div>
					</div>
				</div>
				<div className="property-card-wrap">
					<div
						className="property-thumb img-shine"
						data-mask-src="/img/shape/property-card1-img-mask.png"
					>
						<img src="/img/evolve/services/apartments.jpg" alt="img" />
					</div>
					<div className="property-card">
						<div className="property-card-number">02 </div>
						<div className="property-card-details">
							<span className="property-card-subtitle">Standing Seam / Metal</span>
							<h4 className="property-card-title">
								<a href="service-details.html">Standing Seam & Metal Panel Roofing</a>
							</h4>
							<p className="property-card-text">
								Standing seam and metal panel roofing deliver exceptional strength,
								weather resistance, and long-term performance for commercial properties.
								These systems feature interlocking panels that create a secure, watertight
								barrier against leaks, high winds, and harsh conditions. With professional
								metal panel installation, you get a roof that is low-maintenance,
								energy-efficient, and built to enhance both the protection and appearance
								of your building for decades.
							</p>
							{/* <div className="property-btn-wrap">
								<a href="service-details.html" className="th-btn btn-mask2 th-btn-icon">
									View Details
								</a>
							</div> */}
						</div>
					</div>
				</div>
				<div className="property-card-wrap">
					<div
						className="property-thumb img-shine"
						data-mask-src="/img/shape/property-card1-img-mask.png"
					>
						<img src="/img/evolve/services/mercedez-benz.jpg" alt="img" />
					</div>
					<div className="property-card">
						<div className="property-card-number">03 </div>
						<div className="property-card-details">
							<span className="property-card-subtitle">Prevention</span>
							<h4 className="property-card-title">
								<a href="service-details.html">Electronic Leak Detection</a>
							</h4>
							<p className="property-card-text">
								Electronic leak detection is a proactive solution for identifying even the
								smallest breaches in commercial roofing systems before they become costly
								problems. By using advanced technology to locate hidden leaks with
								precision, building owners can protect their investment, prevent
								structural damage, and avoid business disruptions. This service provides
								peace of mind, ensuring your roof continues to perform at its highest
								level.
							</p>
							{/* <div className="property-btn-wrap">
								<a href="service-details.html" className="th-btn btn-mask2 th-btn-icon">
									View Details
								</a>
							</div> */}
						</div>
					</div>
				</div>
				<div className="property-card-wrap">
					<div
						className="property-thumb img-shine"
						data-mask-src="/img/shape/property-card1-img-mask.png"
					>
						<img src="/img/evolve/services/warehouse-roof.jpg" alt="img" />
					</div>
					<div className="property-card">
						<div className="property-card-number">04 </div>
						<div className="property-card-details">
							<span className="property-card-subtitle">Ongoing</span>
							<h4 className="property-card-title">
								<a href="service-details.html">Repair & Maintenance Services</a>
							</h4>
							<p className="property-card-text">
								Ongoing repair and maintenance services are essential to extending the
								life of your commercial roof and protecting your business from unexpected
								expenses. Regular inspections, preventative maintenance, and timely
								repairs help identify issues early, reducing costly downtime and
								preventing major damage. With a trusted team on call, you can ensure your
								roofing system continues to perform at its best—year after year.
							</p>
							{/* <div className="property-btn-wrap">
								<a href="service-details.html" className="th-btn btn-mask2 th-btn-icon">
									View Details
								</a>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SpaceOne;
