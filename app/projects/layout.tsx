export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<style>{`
				.th-header.header-layout1 {
					position: relative;
					background: transparent;
				}
			`}</style>
			{children}
		</>
	);
}
