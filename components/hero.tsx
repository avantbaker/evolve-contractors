import React from 'react';

function Hero() {
	return (
		<div className="hero-1" id="hero">
			<div
				className="swiper th-slider hero-slider1"
				id="heroSlide1"
				data-slider-options='{"effect":"fade", "autoHeight": "true", "speed": "1000"}'
			>
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<div className="hero-inner" data-mask-src="/img/hero/hero_1_bg_mask.png">
							<div
								className="th-hero-bg"
								data-bg-src="/img/evolve/originals/mercedez-benz.webp"
							/>
							<div className="hero-big-text">EVOLVE</div>
							<div className="container">
								<div className="row align-items-center">
									<div className="col-lg-9">
										<div className="hero-style1">
											<h1 className="hero-title text-white">
												<span
													className="title1"
													data-ani="slideindown"
													data-ani-delay="0.3s"
												>
													Certified Commercial{' '}
												</span>
												<span
													className="title2"
													data-ani="slideindown"
													data-ani-delay="0.4s"
												>
													Roofing Solutions with Excellence{' '}
												</span>
											</h1>
											<p
												className="hero-text text-white"
												data-ani="slideinup"
												data-ani-delay="0.5s"
											>
												We are "Built for Tomorrow" by Investing in Community, Ownership &
												Innovation
											</p>
											<a
												href="#contact-sec"
												className="th-btn btn-mask th-btn-icon"
												data-ani="slideinup"
												data-ani-delay="0.6s"
											>
												REQUEST A QUOTE TODAY
											</a>
										</div>
									</div>
									<div className="col-lg-3">
										<div
											className="hero-video-wrap text-center"
											data-ani="slideinright"
											data-ani-delay="0.4s"
										>
											<a
												href="https://www.youtube.com/watch?v=1L2K1pb5-dU"
												className="play-btn style2 popup-video"
											>
												<i className="fa-sharp fa-solid fa-play" />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="swiper-slide">
						<div className="hero-inner" data-mask-src="/img/hero/hero_1_bg_mask.png">
							<div className="th-hero-bg" data-bg-src="/img/hero/hero_bg_1_2.jpg" />
							<div className="hero-big-text">BUILDA</div>
							<div className="container">
								<div className="row align-items-center">
									<div className="col-lg-9">
										<div className="hero-style1">
											<h1 className="hero-title text-white">
												<span
													className="title1"
													data-ani="slideindown"
													data-ani-delay="0.3s"
												>
													Building Dreams{' '}
												</span>
												<span
													className="title2"
													data-ani="slideindown"
													data-ani-delay="0.4s"
												>
													Creating Reality{' '}
												</span>
											</h1>
											<p
												className="hero-text text-white"
												data-ani="slideinup"
												data-ani-delay="0.5s"
											>
												Bringing together a team with passion, dedication, and resources
												to help our clients reach their buying and selling goals. We are
												with you every step of the way.
											</p>
											<a
												href="contact.html"
												className="th-btn btn-mask th-btn-icon"
												data-ani="slideinup"
												data-ani-delay="0.6s"
											>
												Free Consultation
											</a>
										</div>
									</div>
									<div className="col-lg-3">
										<div
											className="hero-video-wrap text-center"
											data-ani="slideinright"
											data-ani-delay="0.4s"
										>
											<a
												href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
												className="play-btn style2 popup-video"
											>
												<i className="fa-sharp fa-solid fa-play" />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="hero-inner" data-mask-src="/img/hero/hero_1_bg_mask.png">
							<div className="th-hero-bg" data-bg-src="/img/hero/hero_bg_1_3.jpg" />
							<div className="hero-big-text">BUILDA</div>
							<div className="container">
								<div className="row align-items-center">
									<div className="col-lg-9">
										<div className="hero-style1">
											<h1 className="hero-title text-white">
												<span
													className="title1"
													data-ani="slideindown"
													data-ani-delay="0.3s"
												>
													We Construction{' '}
												</span>
												<span
													className="title2"
													data-ani="slideindown"
													data-ani-delay="0.4s"
												>
													Your Classic Home{' '}
												</span>
											</h1>
											<p
												className="hero-text text-white"
												data-ani="slideinup"
												data-ani-delay="0.5s"
											>
												Bringing together a team with passion, dedication, and resources
												to help our clients reach their buying and selling goals. We are
												with you every step of the way.
											</p>
											<a
												href="contact.html"
												className="th-btn btn-mask th-btn-icon"
												data-ani="slideinup"
												data-ani-delay="0.6s"
											>
												Free Consultation
											</a>
										</div>
									</div>
									<div className="col-lg-3">
										<div
											className="hero-video-wrap text-center"
											data-ani="slideinright"
											data-ani-delay="0.4s"
										>
											<a
												href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
												className="play-btn style2 popup-video"
											>
												<i className="fa-sharp fa-solid fa-play" />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> */}
				</div>
				<div className="slider-pagination" />
			</div>
			<div className="hero-social-link">
				<div className="social-wrap">
					<a href="https://facebook.com/">FACEBOOK</a>
					<a href="https://instagram.com/">INSTAGRAM</a>
					<a href="https://twitter.com/">TWITTER</a>
				</div>
			</div>
			<div className="scroll-down">
				<a href="#about-sec" className="hero-scroll-wrap">
					<i className="fal fa-long-arrow-left" />
					Scroll
				</a>
			</div>
		</div>
	);
}

export default Hero;
