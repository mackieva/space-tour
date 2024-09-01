import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				// Complex site-specific column configuration
				header: '1fr 57%',
				homeGrid: '40% 1fr',
			},
			screens: {
				lg: '1440px',
			},
			colors: {
				blue: 'hsl(230,35%,7%)',
				lavender: 'hsl(231,77%,90%)',
				cream: 'hsl(0,0%,100%)',
			},
			fontFamily: {
				serif: ['var(--font-belle)'],
				sans: ['var(--font-barlow)'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
export default config;
