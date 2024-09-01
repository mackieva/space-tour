import logo from '/public/assets/shared/logo.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Nav from './Nav';

export default function Header() {
	return (
		<header className='max-w-screen-lg mx-auto grid grid-cols-header mt-10 relative z-50'>
			<div className='ml-12'>
				<Image src={logo} alt="Space Tourism Logo - Let's Go" />
			</div>
			<Nav />
		</header>
	);
}
