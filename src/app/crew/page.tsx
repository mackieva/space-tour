import Image from 'next/image';
import bgDesktop from '/public/assets/crew/background-crew-desktop.jpg';
import bgTablet from '/public/assets/crew/background-crew-tablet.jpg';
import bgMobile from '/public/assets/crew/background-crew-mobile.jpg';
import { data } from '@/util/data';

export default function CrewPage() {
	const content = data.crew;
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
					<span className='opacity-25 font-bold'>02</span> Meet Your Crew
				</h5>
			</div>
			<div className='overflow-y-visible -mt-20'>
				{content.map((c) => (
					<div
						key={c.name}
						className='mx-w-screen-lg mx-auto grid grid-cols-2 relative z-20'
					>
						<div className='flex flex-col justify-center items-start'>
							<h4>{c.role}</h4>
							<h3>{c.name}</h3>
							<p className='text-lavender'>{c.bio}</p>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src={c.images.webp}
								width={445}
								height={445}
								alt={`Satellite Image of ${c.name}`}
							/>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
