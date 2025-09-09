import React from 'react';

function Testimonials() {
	return (
		<section className="testi-sec-1 space overflow-hidden">
			<div className="container">
				<div className="row gy-80 flex-row-reverse">
					<div className="col-xl-5">
						<div className="testi-thumb-wrap">
							<div className="img1">
								<img src="/img/evolve/testimonials/solar-panel-side.jpg" alt="img" />
							</div>
							{/* <div className="img2 jump">
								<img src="/img/testimonial/testi_thumb_1_2.png" alt="img" />
							</div> */}
						</div>
					</div>
					<div className="col-xl-7">
						<div className="title-area">
							<span className="shadow-title style2">Testimonials</span>
							<h2 className="sec-title">What Our Clients Say</h2>
						</div>
						<div
							className="swiper th-slider testi-slider1"
							id="testiSlider1"
							data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"1"},"992":{"slidesPerView":"1"},"1200":{"slidesPerView":"1"}}}'
						>
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<div className="testi-card">
										<div className="testi-grid_review">
											<i className="fa-sharp fa-solid fa-star" />
											<i className="fa-sharp fa-solid fa-star" />
											<i className="fa-sharp fa-solid fa-star" />
											<i className="fa-sharp fa-solid fa-star" />
											<i className="fa-sharp fa-solid fa-star" />
										</div>
										<p className="testi-card_text">
											“I’ve worked alongside Channing Baker for over a decade—first as a
											director of operations and now as a joint venture partner—and I’ve
											watched him lead over $500 million in commercial construction
											projects from South Carolina to Dallas. Evolve Contractors brings
											elite execution and relationship building to every job. He operates
											with precision, professionalism, and heart. He’s one of the best in
											the business.”
										</p>
										<div className="testi-grid-wrap">
											<div className="testi-card_profile">
												{/* <div
													className="avatar"
													data-mask-src="/img/shape/testi_1_1-mask.png"
												>
													<img src="/img/testimonial/testi_1_1.png" alt="avatar" />
												</div> */}
												<div className="testi-card_profile-details">
													<h3 className="testi-card_name">Ernest Ellis</h3>
													<span className="testi-card_desig">CEO of FS360</span>
												</div>
											</div>
											<div className="quote-icon">
												<img src="/img/icon/qoute.svg" alt="icon" />
											</div>
										</div>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="testi-card">
										<div className="testi-grid_review">
											<i className="fa-sharp fa-solid fa-star" />
											<i className="fa-sharp fa-solid fa-star" />
											<i className="fa-sharp fa-solid fa-star" />
											<i className="fa-sharp fa-solid fa-star" />
											<i className="fa-sharp fa-solid fa-star" />
										</div>
										<p className="testi-card_text">
											"We would contract with Evolve on future projects. They deliver on
											full expertise and understanding of their roofing systems. It’s like
											having a pipeline direct to the manufacturer, with intimate
											knowledge of various roofing conditions and details.”
										</p>
										<div className="testi-grid-wrap">
											<div className="testi-card_profile">
												{/* <div
													className="avatar"
													data-mask-src="/img/shape/testi_1_1-mask.png"
												>
													<img src="/img/testimonial/testi_1_2.png" alt="avatar" />
												</div> */}
												<div className="testi-card_profile-details">
													<h3 className="testi-card_name">Will Callier</h3>
													<span className="testi-card_desig">Lead Project Manager</span>
													<span className="testi-card_desig">CIM Group</span>
												</div>
											</div>
											<div className="quote-icon">
												<img src="/img/icon/qoute.svg" alt="icon" />
											</div>
										</div>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="testi-card">
										<div className="testi-grid_review">
											<i className="fa-sharp fa-solid fa-star" />
											<i className="fa-sharp fa-solid fa-star" />
											<i className="fa-sharp fa-solid fa-star" />
											<i className="fa-sharp fa-solid fa-star" />
											<i className="fa-sharp fa-solid fa-star" />
										</div>
										<p className="testi-card_text">
											“Channing Baker and his team at Evolve Contractors have delivered
											over $10M in renovations for us over the past three years,
											consistently exceeding expectations. I’ve worked with Channing for
											seven years, and what sets him apart is his dependability,
											professionalism, and character. He leads with purpose, solves
											problems proactively, and always finishes strong. You won’t find a
											more committed partner in this industry.”
										</p>
										<div className="testi-grid-wrap">
											<div className="testi-card_profile">
												{/* <div
													className="avatar"
													data-mask-src="/img/shape/testi_1_1-mask.png"
												>
													<img src="/img/testimonial/testi_1_3.png" alt="avatar" />
												</div> */}
												<div className="testi-card_profile-details">
													<h3 className="testi-card_name">Randall Dragon</h3>
													<span className="testi-card_desig">
														CEO of The Dragon Group
													</span>
												</div>
											</div>
											<div className="quote-icon">
												<img src="/img/icon/qoute.svg" alt="icon" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="slider-pagination style2" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
