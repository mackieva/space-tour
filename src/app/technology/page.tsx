'use client';
import Image from 'next/image';
import bgDesktop from '/public/assets/technology/background-technology-desktop.jpg';
import bgTablet from '/public/assets/technology/background-technology-tablet.jpg';
import bgMobile from '/public/assets/technology/background-technology-mobile.jpg';
import { data } from '@/util/data';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TechnologyPage() {
	const content = data.technology;
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
			<div className='pt-24 px-24 max-w-screen-lg mx-auto flex flex-col'>
				<div className='mt-[75px] flex justify-start items-center relative z-20'>
					<h5 className='text-white'>
						<span className='opacity-25 font-bold'>03</span> Space Launch 101
					</h5>
				</div>
			</div>
			<div className='mt-12 ml-40 grid grid-cols-techGrid justify-between relative z-20'>
				<div className='flex flex-col justify-center items-center gap-[53px]'>
					{content.map((c, i) => (
						<button
							key={i}
							onClick={() => setTab(i)}
							className='font-serif text-[32px] border border-slate-400 rounded-full px-[35px] py-[20px] w-auto transition-all hover:bg-white hover:text-blue hover:border-white'
						>
							{i + 1}
						</button>
					))}
				</div>
				<div className='flex flex-col justify-center items-start'>
					{content.map(
						(c, i) =>
							tab === i && (
								<motion.div
									key={i}
									layout={true}
									initial={{ x: 10, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									exit={{ x: -10, opacity: 0 }}
									transition={{
										ease: 'easeOut',
										duration: 0.6,
									}}
								>
									<p className='secondaryTwo'>The Terminology...</p>
									<h3>{c.name}</h3>
									<p className='text-lavender'>{c.description}</p>
								</motion.div>
							)
					)}
				</div>
				<div className='flex justify-end items-center overflow-hidden'>
					{content.map(
						(c, i) =>
							tab === i && (
								<motion.div
									key={i}
									initial={{ x: 20, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									exit={{ x: -20, opacity: 0 }}
									transition={{
										ease: 'easeOut',
										duration: 0.6,
									}}
								>
									<Image
										key={i}
										src={c.images.portrait}
										width={445}
										height={445}
										alt={`Satellite Image of ${c.name}`}
									/>
								</motion.div>
							)
					)}
				</div>
			</div>
		</main>
	);
}
