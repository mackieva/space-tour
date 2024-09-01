import Image from 'next/image';
import Link from 'next/link';
import bgDesktop from '/public/assets/home/background-home-desktop.jpg';
import bgTablet from '/public/assets/home/background-home-tablet.jpg';
import bgMobile from '/public/assets/home/background-home-mobile.jpg';

export default function Home() {
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
			<div className='mx-w-screen-lg h-[85vh] mx-auto px-[165px] grid grid-cols-2 relative z-20'>
				<div className='flex flex-col items-start justify-end'>
					<h5>So, you want to travel to</h5>
					<h1>Space</h1>
					<p className='text-lavender'>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>
				<div className='flex justify-end items-end'>
					<Link
						className='px-[65px] py-[110px] rounded-full bg-white font-serif text-[32px] text-black uppercase'
						href='/destination'
					>
						Explore
					</Link>
				</div>
			</div>
		</main>
	);
}
