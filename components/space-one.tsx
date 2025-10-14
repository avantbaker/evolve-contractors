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
						<img src="/img/evolve/services/sized-commercial-low-slope.jpg" alt="img" />
					</div>
					<div className="property-card">
						<div className="property-card-number">01 </div>
						<div className="property-card-details">
							<span className="property-card-subtitle">
								Commercial Low-Slope Roofing Systems{' '}
							</span>
							<h4 className="property-card-title">
								<a href="service-details.html">
									Single-Ply, Bituminous, Restoration Systems & Pavers
								</a>
							</h4>
							<p className="property-card-text">
								TPO: Delivered large-scale, high-rise TPO roofing systems with zero
								warranty punch items and exceptional seam integrity. PVC: Executed
								chemical-resistant PVC roofs with flawless detailing around complex
								mechanical penetrations. EPDM: Installed 80-Mil fully adhered EPDM
								assemblies achieving 30-year warranties and superior weather performance
								Modified Bitumen: Applied multi-ply Mod Bit systems with precision torch
								application ensuring long-term durability. Coating: Restored aging roofs
								with high-reflectivity coating systems extending service life by over 10
								years.
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
						<img src="/img/evolve/services/sized-standing-seam.jpeg" alt="img" />
					</div>
					<div className="property-card">
						<div className="property-card-number">02 </div>
						<div className="property-card-details">
							<span className="property-card-subtitle">
								Commercial High Slope Roofing Systems{' '}
							</span>
							<h4 className="property-card-title">
								<a href="service-details.html">Metal, Asphalt & Slate Systems </a>
							</h4>
							<p className="property-card-text">
								Metal Panel Roofing: Precision-installed metal panels with long-term
								durability and corrosion resistance. Standing Seam Roofing: Sleek,
								watertight standing seam systems built for performance and longevity.
								Architectural Shingle Roofing: Dimensional shingles delivering lasting
								beauty and proven protection. Slate Shingle Roofing: Handcrafted slate
								roofs offering timeless design and century-grade durability.
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
						<img src="/img/evolve/services/sized-maintenance.jpg" alt="img" />
					</div>
					<div className="property-card">
						<div className="property-card-number">03 </div>
						<div className="property-card-details">
							<span className="property-card-subtitle">
								Commercial Building Contract Services{' '}
							</span>
							<h4 className="property-card-title">
								<a href="service-details.html">
									Roof Maintenance Packages & Electronic Leak Detection{' '}
								</a>
							</h4>
							<p className="property-card-text">
								Roof Maintenance Preventative maintenance programs designed to maximize
								roof life and minimize repair costs. Comprehensive inspection reports with
								photos, condition grading, and proactive repair planning.
								Manufacturer-certified crews ensure your system stays watertight and
								warranty-compliant year-round. ELD (Electronic Leak Detection) Advanced
								electronic testing to accurately locate breaches invisible to the naked
								eye. Non-destructive technology ideal for verifying waterproofing
								integrity before and after installation. Provides documented verification
								for warranty closeout and long-term leak prevention assurance.
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
							<span className="property-card-subtitle">
								Licenced Commercial General Contractor{' '}
							</span>
							<h4 className="property-card-title">
								<a href="service-details.html">Construction Management Services </a>
							</h4>
							<p className="property-card-text">
								Early Design Collaboration: Partnering with owners and architects to align
								scope, budget, and constructability from day one. Preconstruction & Value
								Engineering: Comprehensive cost modeling, schedule development, and VE
								solutions to reduce risk and optimize design. Procurement & Subcontractor
								Management: Leveraging trusted trade partners and competitive sourcing for
								quality, cost, and schedule control. Construction Oversight & QA/QC: Daily
								site management, safety enforcement, and quality control ensuring seamless
								execution. Owner Communication & Reporting: Transparent project tracking
								with real-time updates, meeting minutes, and progress documentation.
								Closeout & Warranty Management: Streamlined turnover packages, punchlist
								completion, and post-occupancy support for lasting performance.
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
