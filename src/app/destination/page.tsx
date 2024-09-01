import Image from 'next/image';
import { data } from '@/util/data';
import bgDesktop from '/public/assets/destination/background-destination-desktop.jpg';
import bgTablet from '/public/assets/destination/background-destination-tablet.jpg';
import bgMobile from '/public/assets/destination/background-destination-mobile.jpg';

export default function DestinationPage() {
	const content = data.destinations;
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
			<div className='mx-w-screen-lg mx-auto mt-[75px] mb-16 flex justify-start items-center relative z-20'>
				<h5 className='text-white'>
					<span className='opacity-25 font-bold'>01</span> Pick Your Destination
				</h5>
			</div>
			<div className='overflow-hidden'>
				{content.map((c) => (
					<div className='mx-w-screen-lg mx-auto grid grid-cols-2 relative z-20'>
						<div className='flex justify-center items-center'>
							<Image
								src={c.images.webp}
								width={445}
								height={445}
								alt={`Satellite Image of ${c.name}`}
							/>
						</div>
						<div className='flex flex-col justify-center items-start'>
							<h2>{c.name}</h2>
							<p className='text-lavender'>{c.description}</p>
							<hr />
							<div className='grid grid-cols-2 w-full'>
								<div>
									<p className='subheadingTwo text-lavender'>Avg. Distance</p>
									<p className='subheadingOne'>{c.distance}</p>
								</div>
								<div>
									<p className='subheadingTwo text-lavender'>
										Est. Travel Time
									</p>
									<p className='subheadingOne'>{c.travel}</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
