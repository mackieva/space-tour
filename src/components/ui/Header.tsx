import Nav from './Nav';

export default function Header() {
	return (
		<header className='max-w-screen-lg mx-auto flex justify-between items-center p-3'>
			<h1>Header!</h1>
			<Nav />
		</header>
	);
}
