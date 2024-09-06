'use client';

import logo from '/public/assets/shared/logo.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Nav from './Nav';
import Link from 'next/link';

export default function Header() {
	return (
		<header className='max-width-full md:max-w-screen-lg md:mx-auto grid grid-cols-headerMobile px-[24px] pt-[24px] pb-0 relative z-50 md:grid-cols-headerTablet md:p-0 lg:grid-cols-header lg:mt-10'>
			<div className='m-0 flex justify-start gap-3 items-center md:ml-12'>
				<Link href='/'>
					<Image src={logo} alt="Space Tourism Logo - Let's Go" />
				</Link>
				<motion.div
					className='logoBorder hidden lg:block'
					initial={{ width: '0%' }}
					animate={{ width: '100%' }}
				/>
			</div>
			<Nav />
		</header>
	);
}
