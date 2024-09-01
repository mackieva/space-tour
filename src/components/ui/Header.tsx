'use client';

import logo from '/public/assets/shared/logo.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Nav from './Nav';
import Link from 'next/link';

export default function Header() {
	return (
		<header className='max-w-screen-lg mx-auto grid grid-cols-header mt-10 relative z-50'>
			<div className='ml-12 flex justify-start gap-3 items-center'>
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
