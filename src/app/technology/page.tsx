import Image from 'next/image';
import bgDesktop from '/public/assets/technology/background-technology-desktop.jpg';
import bgTablet from '/public/assets/technology/background-technology-tablet.jpg';
import bgMobile from '/public/assets/technology/background-technology-mobile.jpg';

export default function TechnologyPage() {
	return (
		<main className='h-screen w-full p-24 absolute top-0 left-0'>
			<Image
				src={bgDesktop}
				alt='Planet Earth in Space'
				placeholder='blur'
				quality={100}
				fill
				sizes='100vw'
				style={{
					objectFit: 'cover',
				}}
				className='hidden lg:block'
			/>
			<Image
				src={bgTablet}
				alt='Planet Earth in Space'
				placeholder='blur'
				quality={100}
				fill
				sizes='100vw'
				style={{
					objectFit: 'cover',
				}}
				className='hidden md:block lg:hidden'
			/>
			<Image
				src={bgMobile}
				alt='Planet Earth in Space'
				placeholder='blur'
				quality={100}
				fill
				sizes='100vw'
				style={{
					objectFit: 'cover',
				}}
				className='md:hidden'
			/>
			<div className='mx-w-screen-lg mx-auto flex flex-col items-center relative z-50'>
				<h1 className='text-6xl font-bold font-mono text-cream'>
					Location Reached: Technology
				</h1>
			</div>
		</main>
	);
}
