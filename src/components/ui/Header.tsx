import logo from '/public/assets/shared/logo.svg';
import Image from 'next/image';
import Nav from './Nav';

export default function Header() {
	return (
		<header className='max-w-screen-lg mx-auto grid grid-cols-2 mt-10 relative z-50'>
			<Image src={logo} alt="Space Tourism Logo - Let's Go" />
			<Nav />
		</header>
	);
}
