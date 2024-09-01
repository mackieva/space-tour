import Link from 'next/link';

export default function Nav() {
	return (
		<nav className='flex justify-between items-center gap-3'>
			<Link href='/'>Home</Link>
			<Link href='/destination'>Destination</Link>
			<Link href='/crew'>Crew</Link>
			<Link href='/technology'>Technology</Link>
		</nav>
	);
}
