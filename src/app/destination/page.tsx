'use client';
import Image from 'next/image';
import { data } from '@/util/data';
import bgDesktop from '/public/assets/destination/background-destination-desktop.jpg';
import bgTablet from '/public/assets/destination/background-destination-tablet.jpg';
import bgMobile from '/public/assets/destination/background-destination-mobile.jpg';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function DestinationPage() {
	const content = data.destinations;
	const [tab, setTab] = useState(0);
	const [hoveredLink, setHoveredLink] = useState('Moon');
	return (
		<main className='h-full w-full absolute top-0 left-0 md:h-screen'>
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
			<div className='px-[24px] pt-24 max-w-full md:px-24 md:max-w-screen-lg md:mx-auto flex flex-col'>
				<div className='mt-[75px] flex justify-start items-center relative z-20'>
					<h5 className='text-white'>
						<span className='opacity-25 font-bold'>01</span> Pick Your
						Destination
					</h5>
				</div>
			</div>
			<div className='mt-12 px-[24px] max-w-full md:px-24 md:flex md:flex-col md:mx-auto md:max-w-screen-lg lg:grid lg:grid-cols-destinationGrid justify-between relative z-20'>
				<div className='flex justify-center items-center md:mb-[53px] lg:mb-0'>
					{content.map(
						(c, i) =>
							tab === i && (
								<motion.div
									key={c.name}
									id={c.name}
									initial={{ y: 10, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: -10, opacity: 0 }}
									transition={{ ease: 'easeOut', duration: 0.6 }}
								>
									<Image
										src={c.images.webp}
										width={445}
										height={445}
										alt={`Satellite Image of ${c.name}`}
										className='max-w-[170px] md:max-w-[300px] lg:max-w-[450px]'
									/>
								</motion.div>
							)
					)}
				</div>
				<div className='flex flex-col justify-center md:items-center md:text-center  lg:text-left lg:items-start'>
					<div className='flex gap-5'>
						{content.map((c, i) => (
							<button
								key={i}
								onClick={() => setTab(i)}
								onMouseEnter={() => setHoveredLink(c.name)}
								className={`subheadingTwo text-lavender uppercase pb-1 relative ${
									tab === i && 'selected'
								}`}
							>
								{c.name}
								{hoveredLink === c.name && (
									<motion.div
										layout={true}
										layoutId='tab-hovered-backdrop'
										className='animatedBorder'
									/>
								)}
							</button>
						))}
					</div>
					{content.map(
						(c, i) =>
							tab === i && (
								<motion.div
									key={c.name}
									initial={{ y: 10, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: -10, opacity: 0 }}
									transition={{
										ease: 'easeOut',
										duration: 0.6,
									}}
								>
									<h2>{c.name}</h2>
									<p className='text-lavender text-lg text-balance'>
										{c.description}
									</p>
									<div className='grid grid-cols-1 md:grid-cols-2 w-full mt-[54px] pt-[28px] border-t border-color borderDark'>
										<div>
											<p className='subheadingTwo text-lavender'>
												Avg. Distance
											</p>
											<p className='subheadingOne'>{c.distance}</p>
										</div>
										<div>
											<p className='subheadingTwo text-lavender'>
												Est. Travel Time
											</p>
											<p className='subheadingOne'>{c.travel}</p>
										</div>
									</div>
								</motion.div>
							)
					)}
				</div>
			</div>
		</main>
	);
}
