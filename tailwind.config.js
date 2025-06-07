/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: 'var(--primary-50)',
					100: 'var(--primary-100)',
					200: 'var(--primary-200)',
					300: 'var(--primary-300)',
					400: 'var(--primary-400)',
					500: 'var(--primary-500)',
					600: 'var(--primary-600)',
					700: 'var(--primary-700)',
					800: 'var(--primary-800)',
					900: 'var(--primary-900)',
				},
				accent: {
					50: 'var(--accent-50)',
					100: 'var(--accent-100)',
					200: 'var(--accent-200)',
					300: 'var(--accent-300)',
					400: 'var(--accent-400)',
					500: 'var(--accent-500)',
					600: 'var(--accent-600)',
					700: 'var(--accent-700)',
					800: 'var(--accent-800)',
					900: 'var(--accent-900)',
				},
				neutral: {
					50: 'var(--neutral-50)',
					100: 'var(--neutral-100)',
					200: 'var(--neutral-200)',
					300: 'var(--neutral-300)',
					400: 'var(--neutral-400)',
					500: 'var(--neutral-500)',
					600: 'var(--neutral-600)',
					700: 'var(--neutral-700)',
					800: 'var(--neutral-800)',
					900: 'var(--neutral-900)',
				},
			},
			fontFamily: {
				sans: ['Noto Sans TC', 'system-ui', 'sans-serif'],
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
			},
		},
	},
	plugins: [],
} 