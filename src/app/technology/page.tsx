'use client';
import Image from 'next/image';
import bgDesktop from '/public/assets/technology/background-technology-desktop.jpg';
import bgTablet from '/public/assets/technology/background-technology-tablet.jpg';
import bgMobile from '/public/assets/technology/background-technology-mobile.jpg';
import { data } from '@/util/data';
import { useState } from 'react';

export default function TechnologyPage() {
	const content = data.technology;
	const [tab, setTab] = useState(0);
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
					<span className='opacity-25 font-bold'>03</span> Space Launch 101
				</h5>
			</div>
			<div className='overflow-y-visible -mt-20'>
				<div className='mx-w-screen-lg mx-auto grid grid-cols-3 relative z-20'>
					<div className='flex flex-col gap-1'>
						{content.map((c, i) => (
							<button
								key={i}
								onClick={() => setTab(i)}
								className='p-2 bg-slate-500 rounded-full'
							></button>
						))}
					</div>
					<div className='flex flex-col justify-center items-start'>
						{content.map((c, i) => (
							<div
								key={i}
								className={`destinationContent ${tab === i ? 'show' : ''}`}
							>
								<p className='secondaryTwo'>The Terminology...</p>
								<h3>{c.name}</h3>
								<p className='text-lavender'>{c.description}</p>
							</div>
						))}
					</div>
					<div className='flex justify-center items-center'>
						{content.map((c, i) => (
							<Image
								key={i}
								src={c.images.portrait}
								width={445}
								height={445}
								alt={`Satellite Image of ${c.name}`}
								className={`destinationContent ${tab === i ? 'show' : ''}`}
							/>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
