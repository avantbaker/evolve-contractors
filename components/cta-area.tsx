import React from 'react';

function CTAArea() {
	return (
		<section className="space-bottom bg-black2 overflow-hidden pt-5" id="contact-sec">
			<div className="container">
				<div className="row gy-80 gx-40 align-items-center">
					<div className="col-xl-6">
						<div
							className="cta-thumb img-shine"
							data-mask-src="/img/shape/cta_1_1-img-mask.png"
						>
							<img
								className="w-100"
								src="/img/evolve/consultation/atlanta-roof-work.webp"
								alt="img"
							/>
						</div>
					</div>
					<div className="col-xl-6">
						<div className="title-area">
							<span className="shadow-title">CONSULTING</span>
							<h2 className="sec-title text-white">
								Have An Upcoming Projects? Let’s Talk to Now!
							</h2>
							<p className="sec-text text-white">
								Protect your investment with our certified, high-quality commercial
								roofing services—contact us today for a free consultation and reliable
								results that last.
							</p>
						</div>
						<div className="btn-wrap">
							{/* <a href="contact.html" className="th-btn btn-mask th-btn-icon">
								Contact Us
							</a> */}
							<div className="call-btn style3">
								<div className="icon-btn">
									<i className="fas fa-phone" />
								</div>
								<div className="btn-content">
									<h6 className="btn-title">Call Us Anytime:</h6>
									<span className="btn-text">
										<a href="tel:678.515.0220">678.515.0220</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CTAArea;
