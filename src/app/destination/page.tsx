import Image from 'next/image';
import bgDesktop from '/public/assets/destination/background-destination-desktop.jpg';
import bgTablet from '/public/assets/destination/background-destination-tablet.jpg';
import bgMobile from '/public/assets/destination/background-destination-mobile.jpg';

export default function DestinationPage() {
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
			<div className='mx-w-screen-lg mx-auto mt-40 grid grid-cols-2 relative z-50'>
				<div className='flex flex-col items-start justify-between '>
					<h1>Destination</h1>
				</div>
			</div>
		</main>
	);
}
