import About from '@/components/about';
import Counter from '@/components/counter';
import CTAArea from '@/components/cta-area';
import Hero from '@/components/hero';
import PopupModal from '@/components/popup-modal';
import Projects from '@/components/projects';
import Services from '@/components/services';
import SpaceOne from '@/components/space-one';
import SpaceTwo from '@/components/space-two';
import Team from '@/components/team';
import Testimonials from '@/components/testimonials';
import VideoArea from '@/components/video-area';

export default function Home() {
	return (
		<>
			<Hero />
			<Counter />
			<About />
			<Services />
			<Projects />
			<SpaceOne />
			<SpaceTwo />
			<VideoArea />
			<Team />
			<CTAArea />
			<Testimonials />
			<PopupModal />
		</>
	);
}
