import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import Head from 'next/head';
import Footer from '@/components/footer';
import Header from '@/components/header';
import MobileMenu from '@/components/mobile-menu';
import SideMenu from '@/components/side-menu';

import '@/template/download-version/assets/css/bootstrap.min.css';
import '@/template/download-version/assets/css/fontawesome.min.css';
import '@/template/download-version/assets/css/magnific-popup.min.css';
import '@/template/download-version/assets/css/swiper-bundle.min.css';
import '@/template/download-version/assets/css/jquery.datetimepicker.min.css';
import '@/template/download-version/assets/css/style.css';

export const metadata: Metadata = {
	title: 'Evolve Contractors',
	description:
		'Certified Commercial Roofing Solutions Serving the National Market with Excellence',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<meta http-equiv="x-ua-compatible" content="ie=edge" />
				<meta name="author" content="Evolve Contractors" />
				<meta name="description" content="Evolve Contractors - Construction Services" />
				<meta name="keywords" content="Evolve Contractors - Construction Services" />
				<meta name="robots" content="INDEX,FOLLOW" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/img/favicons/apple-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/img/favicons/apple-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/img/favicons/apple-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/img/favicons/apple-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/img/favicons/apple-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/img/favicons/apple-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/img/favicons/apple-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/img/favicons/apple-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/img/favicons/apple-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/img/favicons/android-icon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/img/favicons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/img/favicons/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/img/favicons/favicon-16x16.png"
				/>
				<link rel="manifest" href="/img/favicons/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta
					name="msapplication-TileImage"
					content="/img/favicons/ms-icon-144x144.png"
				/>
				<meta name="theme-color" content="#ffffff" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Outfit:wght@100..900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className={`antialiased`}>
				<MobileMenu />
				<SideMenu />
				<Header />
				{children}
				<Footer />
				<Script src="/js/vendor/jquery-3.7.1.min.js"></Script>
				<Script src="/js/swiper-bundle.min.js"></Script>
				<Script src="/js/bootstrap.min.js"></Script>
				<Script src="/js/jquery.magnific-popup.min.js"></Script>
				<Script src="/js/jquery.counterup.min.js"></Script>
				<Script src="/js/jquery-ui.min.js"></Script>
				<Script src="/js/imagesloaded.pkgd.min.js"></Script>
				<Script src="/js/isotope.pkgd.min.js"></Script>
				<Script src="/js/gsap.min.js"></Script>
				<Script src="/js/ScrollTrigger.min.js"></Script>
				<Script src="/js/lenis.min.js"></Script>
				<Script src="/js/jquery.datetimepicker.min.js"></Script>
				<Script src="/js/main.js"></Script>
			</body>
		</html>
	);
}
