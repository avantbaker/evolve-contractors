import type { Metadata } from 'next';
import Breadcrumb from '@/components/breadcrumb';
import { projects } from '@/lib/projects-data';

export const metadata: Metadata = {
	title: 'Projects | Evolve Contractors',
	description:
		'View our portfolio of certified commercial roofing projects across the national market.',
};

export default function ProjectsPage() {
	return (
		<>
			<Breadcrumb
				title="Projects"
				items={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
			/>

			<section className="space-top space-extra2-bottom">
				<div className="container">
					<div className="row gy-40">
						{projects.map((project) => (
							<div className="col-md-6 col-xl-4" key={project.id}>
								<div className="property-card7 style2">
									<div className="property-card-thumb img-shine">
										<img src={project.cardImage} alt={project.title} />
									</div>
									<div className="property-card-details">
										<div className="media-left">
											<h4 className="property-card-title">
												<a href={`/projects/${project.id}`}>{project.title}</a>
											</h4>
											<p className="property-card-subtitle">
												{project.subtitle || 'Building, Construction'}
											</p>
										</div>
										<div className="btn-wrap">
											<a href={`/projects/${project.id}`} className="icon-btn">
												<img src="/img/icon/arrow-right.svg" alt="" />
											</a>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
