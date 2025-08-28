import React from 'react';

function Testimonials() {
	return (
		<section className="testi-sec-1 space overflow-hidden">
			<div className="container">
				<div className="row gy-80 flex-row-reverse">
					<div className="col-xl-5">
						<div className="testi-thumb-wrap">
							<div className="img1">
								<img src="/img/testimonial/testi_thumb_1_1.png" alt="img" />
							</div>
							<div className="img2 jump">
								<img src="/img/testimonial/testi_thumb_1_2.png" alt="img" />
							</div>
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
											“Classic construction refers to building techniques, designs, and
											materials that emphasize durability, elegance, and traditional
											craftsmanship. This approach is often inspired by historical
											architecture.”
										</p>
										<div className="testi-grid-wrap">
											<div className="testi-card_profile">
												<div
													className="avatar"
													data-mask-src="/img/shape/testi_1_1-mask.png"
												>
													<img src="/img/testimonial/testi_1_1.png" alt="avatar" />
												</div>
												<div className="testi-card_profile-details">
													<h3 className="testi-card_name">Janny Muna</h3>
													<span className="testi-card_desig">CEO of Company</span>
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
											“Classic construction refers to building techniques, designs, and
											materials that emphasize durability, elegance, and traditional
											craftsmanship. This approach is often inspired by historical
											architecture.”
										</p>
										<div className="testi-grid-wrap">
											<div className="testi-card_profile">
												<div
													className="avatar"
													data-mask-src="/img/shape/testi_1_1-mask.png"
												>
													<img src="/img/testimonial/testi_1_2.png" alt="avatar" />
												</div>
												<div className="testi-card_profile-details">
													<h3 className="testi-card_name">Alexan Micelito</h3>
													<span className="testi-card_desig">Senior Manager</span>
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
											“Classic construction refers to building techniques, designs, and
											materials that emphasize durability, elegance, and traditional
											craftsmanship. This approach is often inspired by historical
											architecture.”
										</p>
										<div className="testi-grid-wrap">
											<div className="testi-card_profile">
												<div
													className="avatar"
													data-mask-src="/img/shape/testi_1_1-mask.png"
												>
													<img src="/img/testimonial/testi_1_3.png" alt="avatar" />
												</div>
												<div className="testi-card_profile-details">
													<h3 className="testi-card_name">Brooklyn Simmons</h3>
													<span className="testi-card_desig">Junior Manager</span>
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
