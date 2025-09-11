import React from 'react';

function Projects() {
	return (
		<section
			className="project-area-1 space overflow-hidden"
			data-bg-src="/img/evolve/originals/aquariam-nextdoor.webp"
			data-opacity={7}
			data-overlay="title"
		>
			<div className="container">
				<div className="project-wrap1">
					<div className="project-number-pagination" data-slider-tab="#projectSlider1">
						<div className="tab-btn active">
							<span>01</span>
						</div>
						<div className="tab-btn">
							<span>02</span>
						</div>
						<div className="tab-btn">
							<span>03</span>
						</div>
						<div className="tab-btn">
							<span>04</span>
						</div>
					</div>
					<div className="row gy-50 justify-content-between align-items-center">
						<div className="col-xxl-5 col-xl-6">
							<div className="project-title-wrap1">
								<div className="title-area mb-40">
									<span className="shadow-title">PROJECTS</span>
									<h2 className="sec-title text-white">
										Building The Future, One Roof at a Time.
									</h2>
									<p className="sec-text text-white mt-15">
										Built to withstand the test of time, with strong foundations and
										high-end construction techniques.
									</p>
								</div>
								<div className="btn-wrap">
									{/* <a href="project.html" className="th-btn btn-mask th-btn-icon">
										Explore More
									</a> */}
								</div>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="slider-area project-slider-area">
								<div
									className="swiper th-slider project-slider1"
									id="projectSlider1"
									data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"1"},"992":{"slidesPerView":"1"},"1200":{"slidesPerView":"1"}},"loop":false, "thumbs":{"swiper":".project-number-pagination"}}'
								>
									<div className="swiper-wrapper">
										<div className="swiper-slide">
											<div className="portfolio-card">
												<div
													className="portfolio-img img-shine"
													data-mask-src="/img/shape/project-card1-img-mask.png"
													// data-bs-toggle="modal"
													// data-bs-target="#portfolioModal"
												>
													<img
														src="/img/evolve/projects/roof-1.jpg"
														alt="project image"
													/>
													{/* <div
														className="portfolio-card-shape"
														data-mask-src="/img/shape/project-card1-img-mask.png"
													>
														<img src="/img/project/project_shape1_1.png" alt="img" />
													</div> */}
												</div>
												<div className="portfolio-content">
													<a
														href="#portfolioModal"
														// data-bs-toggle="modal"
														// data-bs-target="#portfolioModal"
														className="icon-btn"
													>
														<img src="/img/icon/arrow-right.svg" alt="img" />
													</a>
												</div>
											</div>
										</div>
										<div className="swiper-slide">
											<div className="portfolio-card">
												<div
													className="portfolio-img img-shine"
													data-mask-src="/img/shape/project-card1-img-mask.png"
													// data-bs-toggle="modal"
													// data-bs-target="#portfolioModal"
												>
													<img
														src="/img/evolve/projects/roof-2.jpg"
														alt="project image"
													/>
													{/* <div
														className="portfolio-card-shape"
														data-mask-src="/img/shape/project-card1-img-mask.png"
													>
														<img src="/img/project/project_shape1_1.png" alt="img" />
													</div> */}
												</div>
												<div className="portfolio-content">
													<a
														href="#portfolioModal"
														// data-bs-toggle="modal"
														// data-bs-target="#portfolioModal"
														className="icon-btn"
													>
														<img src="/img/icon/arrow-right.svg" alt="img" />
													</a>
												</div>
											</div>
										</div>
										<div className="swiper-slide">
											<div className="portfolio-card">
												<div
													className="portfolio-img img-shine"
													data-mask-src="/img/shape/project-card1-img-mask.png"
													// data-bs-toggle="modal"
													// data-bs-target="#portfolioModal"
												>
													<img
														src="/img/evolve/projects/roof-3.jpg"
														alt="project image"
													/>
													{/* <div
														className="portfolio-card-shape"
														data-mask-src="/img/shape/project-card1-img-mask.png"
													>
														<img src="/img/project/project_shape1_1.png" alt="img" />
													</div> */}
												</div>
												<div className="portfolio-content">
													<a
														href="#portfolioModal"
														// data-bs-toggle="modal"
														// data-bs-target="#portfolioModal"
														className="icon-btn"
													>
														<img src="/img/icon/arrow-right.svg" alt="img" />
													</a>
												</div>
											</div>
										</div>
										<div className="swiper-slide">
											<div className="portfolio-card">
												<div
													className="portfolio-img img-shine"
													data-mask-src="/img/shape/project-card1-img-mask.png"
													// data-bs-toggle="modal"
													// data-bs-target="#portfolioModal"
												>
													<img
														src="/img/evolve/projects/roof-4.jpg"
														alt="project image"
													/>
													{/* <div
														className="portfolio-card-shape"
														data-mask-src="/img/shape/project-card1-img-mask.png"
													>
														<img src="/img/project/project_shape1_1.png" alt="img" />
													</div> */}
												</div>
												<div className="portfolio-content">
													<a
														href="#portfolioModal"
														// data-bs-toggle="modal"
														// data-bs-target="#portfolioModal"
														className="icon-btn"
													>
														<img src="/img/icon/arrow-right.svg" alt="img" />
													</a>
												</div>
											</div>
										</div>
										{/* <div className="swiper-slide">
											<div className="portfolio-card">
												<div
													className="portfolio-img img-shine"
													data-mask-src="/img/shape/project-card1-img-mask.png"
													// data-bs-toggle="modal"
													// data-bs-target="#portfolioModal"
												>
													<img src="/img/project/project_1_2.png" alt="project image" />
													<div
														className="portfolio-card-shape"
														data-mask-src="/img/shape/project-card1-img-mask.png"
													>
														<img src="/img/project/project_shape1_1.png" alt="img" />
													</div>
												</div>
												<div className="portfolio-content">
													<a
														href="#portfolioModal"
														// data-bs-toggle="modal"
														// data-bs-target="#portfolioModal"
														className="icon-btn"
													>
														<img src="/img/icon/arrow-right.svg" alt="img" />
													</a>
												</div>
											</div>
										</div> */}
									</div>
									<div className="slider-pagination d-sm-block d-none" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
