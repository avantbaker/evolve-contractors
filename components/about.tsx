import React from 'react';

function About() {
	return (
		<div className="overflow-hidden space-top bg-black2" id="about-sec">
			<div className="container">
				<div className="row justify-content-between align-items-center">
					<div className="col-lg-6">
						<div className="title-area">
							<span className="shadow-title">About</span>
							<h2 className="sec-title text-white">About Us</h2>
							<p className="sec-text text-white">
								We are a commercial construction roofing company with over 20 years of
								experience, specializing in delivering safe, durable, and cost-effective
								roofing solutions for businesses of all sizes.
							</p>
						</div>
					</div>
					<div className="col-auto">
						<div className="sec-btn">
							<a href="about.html" className="th-btn btn-mask th-btn-icon">
								Learn More
							</a>
						</div>
					</div>
				</div>
				<div className="row gy-4">
					<div className="col-lg-6">
						<div className="img-box1">
							<div className="img1 img-shine" data-mask-src="/img/shape/about-1-mask.png">
								<img src="/img/evolve/about/about-1.webp" alt="About" />
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="img-box1">
							<div className="img1 img-shine" data-mask-src="/img/shape/about-1-mask.png">
								<img src="/img/evolve/about/about-2.webp" alt="About" />
							</div>
						</div>
					</div>
				</div>
				<div className="mt-60">
					<div className="row gy-40 flex-row-reverse">
						<div className="col-xl-3 text-xl-end">
							{/* <div className="about-tag">
								<div className="about-experience-tag">
									<span className="circle-title-anime">
										Builda Agent <i className="fas fa-star" /> Builda Living Solutions
									</span>
								</div>
								<div className="about-tag-thumb">
									<img src="/img/normal/about_1_3.png" alt="img" />
								</div>
							</div> */}
						</div>
						<div className="col-xl-9">
							<div className="about-wrap1">
								<p className="about-text text-white">
									"Our top priority is protecting your business by providing roofing
									systems designed not only to last, but to reduce long-term maintenance
									costs and give you peace of mind year after year."
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
