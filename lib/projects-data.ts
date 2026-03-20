export type ProjectMetaItem = {
	label: string;
	value: string;
};

export type ProjectData = {
	id: string;
	title: string;
	heroImage: string;
	cardImage: string;
	summary: string[];
	meta: ProjectMetaItem[];
	secondaryImage?: string;
	benefitsTitle?: string;
	benefitsDescription?: string;
	benefits?: string[];
	subtitle?: string;
};

export const projects: ProjectData[] = [
	{
		id: 'rice-center',
		title: 'RICE EDA Phase III – 504 Fair Street SW',
		subtitle: 'Renovation, Historical or Adaptive Re-Use',
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
		subtitle: 'Renovation, Historical or Adaptive Re-Use',
		heroImage: '/img/evolve/projects/sports-rendering.jpg',
		cardImage: '/img/evolve/projects/cards/sports-rendering.jpg',
		summary: [
			"Evolve Contractors is providing the TPO roofing scope for the museum's 24,000 SF expansion, including new wing roofs, insulation assemblies, vapor barriers, and integrated flashing systems.",
			"The expansion marks a critical phase in NCCHR's $56 million project to add galleries, classrooms, and event spaces to this iconic downtown Atlanta institution.",
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
		subtitle: 'K-12 or Higher Education',
		heroImage: '/img/evolve/projects/k-12-rendering.png',
		cardImage: '/img/evolve/projects/cards/k-12-rendering.png',
		summary: [
			'Evolve Contractors installed a standing seam metal roof system over pre-sloped decks, with R-25 insulation, HT ice & water barrier, 16" snap-lock panels, and full trim/gutter integration.',
			"The new roof adds durable, low-maintenance protection to educational spaces in South Douglas, aligning with the school district's longevity goals.",
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
		subtitle: 'Multifamily',
		heroImage: '/img/evolve/projects/residential-rendering.jpeg',
		cardImage: '/img/evolve/projects/cards/residential-rendering.jpeg',
		summary: [
			'Evolve Contractors installed a fully adhered 60-mil EPDM system over ~59,300 SF, including R-25 insulation, aluminum coping, gutters, and downspouts.',
			"This project supports upscale residential and mixed-use growth in the Herndon Square district—a key node in Atlanta's redevelopment corridor.",
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
];

export function getProjectById(id: string): ProjectData | undefined {
	return projects.find((p) => p.id === id);
}

export function getProjectBySlug(slug: string): ProjectData | undefined {
	return projects.find((p) => p.id === slug);
}

export function getAllProjectSlugs(): string[] {
	return projects.map((p) => p.id);
}
