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
				<div className='mx-w-screen-lg mx-auto grid grid-cols-2 relative z-20'>
					<div className='flex justify-center items-center'>
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
										/>
									</motion.div>
								)
						)}
					</div>
					<div className='flex flex-col justify-center items-start'>
						<div className='flex gap-1'>
							{content.map((c, i) => (
								<button
									key={i}
									onClick={() => setTab(i)}
									className={`text-lavender uppercase pr-8 ${
										tab === i && 'selected'
									}`}
								>
									{c.name}
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
										<p className='text-lavender max-w-[43ch]'>
											{c.description}
										</p>
										<hr />
										<div className='grid grid-cols-2 w-full'>
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
			</div>
		</main>
	);
}
