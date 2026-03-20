import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/breadcrumb';
import { getProjectBySlug, getAllProjectSlugs, projects } from '@/lib/projects-data';

type Props = {
	params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
	return getAllProjectSlugs().map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;
	const project = getProjectBySlug(id);

	if (!project) {
		return { title: 'Project Not Found | Evolve Contractors' };
	}

	return {
		title: `${project.title} | Evolve Contractors`,
		description: project.summary[0],
	};
}

export default async function ProjectDetailsPage({ params }: Props) {
	const { id } = await params;
	const project = getProjectBySlug(id);

	if (!project) {
		notFound();
	}

	// Find adjacent projects for prev/next navigation
	const currentIndex = projects.findIndex((p) => p.id === id);
	const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
	const nextProject =
		currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

	return (
		<>
			<Breadcrumb
				title="Project Details"
				items={[
					{ label: 'Home', href: '/' },
					{ label: 'Projects', href: '/projects' },
					{ label: project.title },
				]}
				backgroundImage={project.heroImage}
			/>

			<section className="project-details-page space-top space-extra2-bottom">
				<div className="container">
					<div className="page-img">
						<img src={project.heroImage} alt={project.title} />
					</div>
					<div className="row">
						<div className="col-xxl-8 col-lg-8">
							<div className="page-single mt-30">
								<p className="text-theme mb-0">
									{project.subtitle || 'Building, Construction'}
								</p>
								<h2 className="fw-semibold mb-3">{project.title}</h2>
								{project.summary.map((paragraph, index) => (
									<p
										key={index}
										className={index < project.summary.length - 1 ? 'mb-40' : ''}
									>
										{paragraph}
									</p>
								))}

								{project.benefitsTitle && (
									<>
										<h4 className="fw-semibold mb-30 mt-45">{project.benefitsTitle}</h4>
										<div className="row gx-40 gy-40 align-items-center">
											{project.secondaryImage && (
												<div className="col-xl-5">
													<div className="page-img">
														<img
															src={project.secondaryImage}
															alt={`${project.title} secondary`}
														/>
													</div>
												</div>
											)}
											<div className={project.secondaryImage ? 'col-xl-7' : 'col-xl-12'}>
												{project.benefits && project.benefits.length > 0 && (
													<div className="checklist style5">
														<ul>
															{project.benefits.map((benefit, index) => (
																<li key={index}>{benefit}</li>
															))}
														</ul>
													</div>
												)}
											</div>
										</div>
									</>
								)}

								<div className="blog-navigation">
									{prevProject ? (
										<a href={`/projects/${prevProject.id}`} className="nav-btn prev">
											<span className="icon-btn">
												<img src="/img/icon/arrow-left.svg" alt="Previous" />
											</span>
											<span className="nav-text">Previous</span>
										</a>
									) : (
										<span />
									)}
									{nextProject ? (
										<a href={`/projects/${nextProject.id}`} className="nav-btn next">
											<span className="icon-btn">
												<img src="/img/icon/arrow-right.svg" alt="Next" />
											</span>
											<span className="nav-text">Next</span>
										</a>
									) : (
										<span />
									)}
								</div>
							</div>
						</div>
						<div className="col-xxl-4 col-lg-4">
							<aside className="sidebar-area">
								<div className="widget widget_info">
									<h3 className="widget_title">Project Information</h3>
									<div className="info-list">
										<ul>
											{project.meta.map((item, index) => (
												<li key={index}>
													<div className="box-icon">
														<i className={`fas ${getMetaIcon(item.label)}`} />
													</div>
													<div>
														<span className="text">{item.label} :</span>
														<strong className="title">{item.value}</strong>
													</div>
												</li>
											))}
										</ul>
									</div>
								</div>
								<div className="widget widget_call">
									<div className="play-btn">
										<i className="fa-solid fa-phone" />
									</div>
									<h4 className="box-title">Need Help? Call Here</h4>
									<a href="tel:+6785150220" className="call">
										678.515.0220
									</a>
									<a href="/#contact-sec" className="th-btn style4 btn-sm th-btn-icon">
										Get a Quote
									</a>
								</div>
							</aside>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

function getMetaIcon(label: string): string {
	const iconMap: Record<string, string> = {
		'Service Category': 'fa-layer-group',
		Client: 'fa-user',
		'Contract Date': 'fa-calendar-days',
		'Project Date': 'fa-calendar-days',
		Warranty: 'fa-shield',
		Vertical: 'fa-building',
		Location: 'fa-map-marker-alt',
	};
	return iconMap[label] || 'fa-circle-info';
}
