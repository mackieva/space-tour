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
			<div className='flex flex-col mx-w-screen-lg mx-auto pt-[200px] px-[160px] h-full relative z-20 lg:h-[85vh] lg:px-[165px] lg:grid lg:grid-cols-2'>
				<div className='flex flex-col justify-start	 items-center lg:justify-center lg:items-start'>
					<h5 className='text-xl lg:text-[28px]'>So, you want to travel to</h5>
					<h1>Space</h1>
					<p className='text-lavender text-center lg:text-left'>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>
				<div className='flex flex-col justify-center items-center mt-auto mb-[90px] lg:justify-end lg:items-end'>
					<Link
						className='rounded-full bg-white font-serif text-[32px] text-black px-[45px] py-[85px] uppercase lg:px-[65px] lg:py-[110px]'
						href='/destination'
					>
						Explore
					</Link>
				</div>
			</div>
		</main>
	);
}
