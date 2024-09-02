'use client';

import Link from 'next/link';
import { navList } from '@/util/data';
import { useState } from 'react';
import '@/components/ui/Nav.css';
import { motion } from 'framer-motion';

export default function Nav() {
	const [hoveredLink, setHoveredLink] = useState('');

	return (
		<nav
			className='flex justify-center items-center bg-white/[0.04] backdrop-blur-md gap-[35px] lg:gap-[52px]'
			onMouseLeave={() => setHoveredLink('')}
		>
			{navList.map((link, i) => (
				<Link
					className='font-sansCon text-white tracking-[2.7px] pt-10 pb-10 uppercase relative md:text-sm lg:text-base'
					href={link.path}
					key={i}
					onMouseEnter={() => setHoveredLink(link.label)}
				>
					<span className='pr-3 font-bold hidden lg:inline'>0{i}</span>
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
	);
}
