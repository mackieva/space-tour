import type { Metadata } from 'next';
import { Bellefair, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/Header';

const bellefair = Bellefair({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-belle',
});

const barlow = Barlow_Condensed({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-barlow',
});

export const metadata: Metadata = {
	title: 'Space Tourism',
	description:
		'Space tourism site with Next.js, Tailwind and Framer Motion / GSAP',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${bellefair.variable} ${barlow.variable}`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
