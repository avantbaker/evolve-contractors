'use client';

import { useMemo } from 'react';
import type { ProjectModalData } from '@/components/project-modal-provider';
import { useProjectModal } from '@/components/project-modal-provider';
import { projects } from '@/lib/projects-data';

type ProjectSlide = ProjectModalData & {
	cardImage: string;
};

function Projects() {
	const { openModal } = useProjectModal();

	const handleOpenModal = (projectData: ProjectSlide) => {
		openModal(projectData);
	};

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
										Built for tomorrow, obsessed with Community, Ownership and Innovation
									</h2>
									<p className="sec-text text-white mt-15">
										Built to withstand the test of time, with strong knowledge and
										high-end roofing techniques.
									</p>
								</div>
								<div className="btn-wrap">
									<a href="/projects" className="th-btn btn-mask th-btn-icon">
										Explore More
									</a>
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
										{projects.map((project) => (
											<div className="swiper-slide" key={project.id}>
												<div className="portfolio-card">
													<div
														className="portfolio-img img-shine"
														data-mask-src="/img/shape/project-card1-img-mask.png"
														role="button"
														tabIndex={0}
														onClick={() => handleOpenModal(project)}
														onKeyDown={(event) => {
															if (event.key === 'Enter' || event.key === ' ') {
																event.preventDefault();
																handleOpenModal(project);
															}
														}}
													>
														<img
															src={project.cardImage}
															alt={`${project.title} project image`}
														/>
													</div>
													<div className="portfolio-content">
														<button
															type="button"
															className="icon-btn"
															onClick={() => handleOpenModal(project)}
														>
															<img
																src="/img/icon/arrow-right.svg"
																alt="Open project details"
															/>
														</button>
													</div>
												</div>
											</div>
										))}
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
