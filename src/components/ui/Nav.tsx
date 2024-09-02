'use client';

import Link from 'next/link';
import { navList } from '@/util/data';
import { useState } from 'react';
import '@/components/ui/Nav.css';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Nav() {
	const [hoveredLink, setHoveredLink] = useState('');
	const [navOpen, setNavOpen] = useState(false);

	return (
		<>
			<div className='flex justify-end items-center md:hidden'>
				<Bars3Icon
					className='size-10 text-lavender hover:cursor-pointer'
					onClick={() => setNavOpen(true)}
				/>
			</div>
			<nav
				className={`flex flex-col justify-start items-start bg-white/[0.04] backdrop-blur-md gap-[32px] absolute top-0 right-0 w-2/3 h-screen p-8 pb-0 transition-all ${
					navOpen ? 'translate-x-0' : 'translate-x-full'
				} md:justify-center md:relative md:h-auto md:w-full md:flex-row md:translate-x-0 lg:gap-[52px]`}
				onMouseLeave={() => setHoveredLink('')}
			>
				<XMarkIcon
					className='size-6 text-lavender self-end hover:cursor-pointer md:hidden'
					onClick={() => setNavOpen(false)}
				/>
				{navList.map((link, i) => (
					<Link
						className='font-sansCon text-white tracking-[2.7px] uppercase relative text-base md:text-sm md:pb-10 lg:text-base'
						href={link.path}
						key={i}
						onMouseEnter={() => setHoveredLink(link.label)}
					>
						<span className='pr-3 md:font-bold inline md:hidden lg:inline'>
							0{i}
						</span>
						{link.label}
						{hoveredLink === link.label && (
							<motion.div
								layout={true}
								layoutId='hovered-backdrop'
								className='animatedBorder'
							/>
						)}
					</Link>
				))}
			</nav>
		</>
	);
}
