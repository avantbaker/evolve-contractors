'use client';

import { useMemo } from 'react';
import type { ProjectModalData } from '@/components/project-modal-provider';
import { useProjectModal } from '@/components/project-modal-provider';

type ProjectSlide = ProjectModalData & {
	cardImage: string;
};

function Projects() {
	const { openModal } = useProjectModal();

	const projects = useMemo<ProjectSlide[]>(
		() => [
			{
				id: 'rice-center',
				title: 'RICE EDA Phase III – 504 Fair Street SW',
				heroImage: '/img/evolve/projects/private-rendering.jpg',
				cardImage: '/img/evolve/projects/cards/private-rendering.jpg',
				summary: [
					'Evolve Contractors delivered the exterior envelope package, which included TPO roofing, ACM metal panels, and cold-applied waterproofing solutions.',
					'We coordinated across trades to maintain envelope integrity while supporting building expansion.',
				],
				meta: [
					{ label: 'Service Category', value: 'TPO Roofing, ACM Panels, Waterproofing' },
					{
						label: 'Client',
						value: 'FS360 / Russell Innovation Center for Entrepreneurs',
					},
					{ label: 'Contract Date', value: 'November 14, 2023' },
					{ label: 'Vertical', value: 'Renovation, Historical or Adaptive Re-Use' },
					{ label: 'Location', value: 'Atlanta, GA' },
				],
				secondaryImage: '/img/evolve/projects/secondary/private-rice.jpg',
				benefitsTitle: 'Integrated Advantages',
				benefits: [
					'Single-source envelope solution for roofing, panels & waterproofing',
					'Prefabricated metal systems for efficient and precise install',
					'Paver integration and watertight detailing',
					'Phased execution to support campus continuity',
				],
			},
			{
				id: 'ncchr',
				title: 'National Center for Civil and Human Rights (NCCHR) Expansion',
				heroImage: '/img/evolve/projects/sports-rendering.jpg',
				cardImage: '/img/evolve/projects/cards/sports-rendering.jpg',
				summary: [
					'Evolve Contractors is providing the TPO roofing scope for the museum’s 24,000 SF expansion, including new wing roofs, insulation assemblies, vapor barriers, and integrated flashing systems.',
					'The expansion marks a critical phase in NCCHR’s $56 million project to add galleries, classrooms, and event spaces to this iconic downtown Atlanta institution.',
				],
				meta: [
					{
						label: 'Service Category',
						value: 'TPO Roofing (Concrete & Metal Deck Assemblies)',
					},
					{ label: 'Client', value: 'NCCHR / Perkins & Will' },
					{ label: 'Project Date', value: 'February 1, 2024' },
					{ label: 'Warranty', value: '30-Year Manufacturer Warranty' },
					{ label: 'Vertical', value: 'Renovation, Historical or Adaptive Re-Use' },
					{ label: 'Location', value: 'Atlanta, GA' },
				],
				secondaryImage: '/img/evolve/projects/secondary/sports-human-rights.jpg',
				benefitsTitle: 'Seamless System Integration',
				benefits: [
					'Seamless TPO roofing across mixed substrates',
					'Complex transitions around architectural volumes',
					'Full warranty alignment for museum-grade specification',
					'Coordination with museum closure & phasing constraints',
				],
			},
			{
				id: 'south-doughlas',
				title: 'South Douglas Elementary – Classroom Addition',
				heroImage: '/img/evolve/projects/k-12-rendering.png',
				cardImage: '/img/evolve/projects/cards/k-12-rendering.png',
				summary: [
					'Evolve Contractors installed a standing seam metal roof system over pre-sloped decks, with R-25 insulation, HT ice & water barrier, 16" snap-lock panels, and full trim/gutter integration.',
					'The new roof adds durable, low-maintenance protection to educational spaces in South Douglas, aligning with the school district’s longevity goals.',
				],
				meta: [
					{ label: 'Service Category', value: 'Standing Seam Metal Roofing (SSMR)' },
					{ label: 'Client', value: 'Gilbane Building Company' },
					{ label: 'Project Date', value: 'May 23, 2025' },
					{ label: 'Warranty', value: '20-Year Watertight & Paint Finish Warranty' },
					{ label: 'Vertical', value: 'K-12 or Higher Education' },
					{ label: 'Location', value: 'Douglas County, GA' },
				],
				secondaryImage: '/img/evolve/projects/secondary/k-12-chapel-hill.jpg',
				benefitsTitle: 'Key Outcomes',
				benefits: [
					'High-efficiency R-25 insulated system',
					'Factory-finished metal panels and accessories',
					'Full integration of drainage, gutters, and flashings',
					'20-year comprehensive system and finish warranty',
				],
			},
			{
				id: 'herndon-square-phase-2',
				title: 'Herndon Square Phase 2',
				heroImage: '/img/evolve/projects/residential-rendering.jpeg',
				cardImage: '/img/evolve/projects/cards/residential-rendering.jpeg',
				summary: [
					'Evolve Contractors installed a fully adhered 60-mil EPDM system over ~59,300 SF, including R-25 insulation, aluminum coping, gutters, and downspouts.',
					'This project supports upscale residential and mixed-use growth in the Herndon Square district—a key node in Atlanta’s redevelopment corridor.',
				],
				meta: [
					{ label: 'Service Category', value: 'EPDM Roofing' },
					{ label: 'Client', value: 'Capstone Building Corporation' },
					{ label: 'Project Date', value: 'March 24, 2024' },
					{ label: 'Warranty', value: '20-Year Manufacturer Warranty' },
					{ label: 'Vertical', value: 'Multifamily' },
					{ label: 'Location', value: 'Atlanta, GA' },
				],
				secondaryImage: '/img/evolve/projects/secondary/residential-herndon.jpeg',
				benefitsTitle: 'Experience Enhancements',
				benefits: [
					'Fully adhered EPDM for durable waterproofing',
					'Mechanically attached insulation for thermal stability',
					'Custom-fabricated edge metals and drainage',
					'20-year system warranty',
				],
			},
		],
		[]
	);

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
