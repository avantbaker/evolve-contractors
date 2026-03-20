type BreadcrumbItem = {
	label: string;
	href?: string;
};

type BreadcrumbProps = {
	title: string;
	items: BreadcrumbItem[];
	backgroundImage?: string;
};

export default function Breadcrumb({
	title,
	items,
	backgroundImage = '/img/evolve/originals/finished-mercedez-benz.jpeg',
}: BreadcrumbProps) {
	return (
		<div
			className="breadcumb-wrapper"
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}
		>
			<div
				className="breadcumb-overlay"
				style={{ backgroundImage: 'url(/img/bg/breadcumb-bg-overlay.png)' }}
			/>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="breadcumb-content">
							<h1 className="breadcumb-title">{title}</h1>
							<ul className="breadcumb-menu">
								{items.map((item, index) =>
									item.href ? (
										<li key={index}>
											<a href={item.href}>{item.label}</a>
										</li>
									) : (
										<li key={index}>{item.label}</li>
									),
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
