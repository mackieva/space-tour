'use client';

import Image from 'next/image';
import bgDesktop from '/public/assets/crew/background-crew-desktop.jpg';
import bgTablet from '/public/assets/crew/background-crew-tablet.jpg';
import bgMobile from '/public/assets/crew/background-crew-mobile.jpg';
import { motion } from 'framer-motion';
import { data } from '@/util/data';
import { useState } from 'react';

export default function CrewPage() {
	const content = data.crew;
	const [tab, setTab] = useState(0);
	return (
		<main className='h-screen w-full absolute top-0 left-0'>
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
			<div className='pt-24 px-24 max-w-screen-lg mx-auto flex flex-col h-full'>
				<div className='mt-[75px] flex justify-start items-center relative z-20'>
					<h5 className='text-white'>
						<span className='opacity-25 font-bold'>02</span> Meet Your Crew
					</h5>
				</div>
				<div className='-mt-8 flex-1 grid grid-cols-2 justify-stretch relative z-20'>
					<div className='flex flex-col justify-center items-start'>
						{content.map(
							(c, i) =>
								tab === i && (
									<motion.div
										key={c.name}
										initial={{ x: 10, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										exit={{ x: -10, opacity: 0 }}
										transition={{ ease: 'easeOut', duration: 0.6 }}
									>
										<h4>{c.role}</h4>
										<h3>{c.name}</h3>
										<p className='text-lavender'>{c.bio}</p>
									</motion.div>
								)
						)}
						<div className='flex gap-6'>
							{content.map((c, i) => (
								<button
									key={i}
									onClick={() => setTab(i)}
									className={`h-4 w-4 bg-slate-500 rounded-full transition hover:bg-white ${
										tab === i ? 'selected' : ''
									}`}
								></button>
							))}
						</div>
					</div>
					<div className='flex justify-end items-end relative overflow-hidden'>
						{content.map(
							(c, i) =>
								tab === i && (
									<motion.div
										key={c.name}
										initial={{ y: 10, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: -10, opacity: 0 }}
										transition={{ ease: 'easeOut', duration: 0.6 }}
										className='z-30 relative w-full h-full'
									>
										<Image
											key={c.name}
											src={c.images.png}
											fill
											alt={`Headshot of ${c.name}`}
											style={{
												objectFit: 'contain',
											}}
										/>
									</motion.div>
								)
						)}
					</div>
				</div>
			</div>
		</main>
	);
}
