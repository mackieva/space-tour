import Link from 'next/link';
import { navList } from '@/util/data';

export default async function Nav() {
	return (
		<nav className='flex justify-end items-center gap-[52px] pr-[52px] bg-white/[0.04] backdrop-blur-md'>
			{navList.map((link, i) => (
				<Link
					className='font-mono text-white tracking-[2.7px] uppercase'
					href={link.path}
				>
					<span className='pr-3 font-bold'>0{i + 1}</span>
					{link.label}
				</Link>
			))}
		</nav>
	);
}
