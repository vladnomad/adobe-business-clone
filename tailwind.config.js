const colors = require('tailwindcss/colors')

module.exports = {
	mode: 'jit',
	content: [
		'./public/**/*.html',
		'./src/**/*.{js,jsx,ts,tsx,vue}',
	],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			stone: colors.stone,
			sky: colors.sky,
			blue: colors.blue,
			black: colors.black,
			white: colors.white,
			neutral: colors.neutral,
			adobe: "#fbfbfb",
			adobered: {
				light: "#f00f00",
				dark: "#b40e04",
			},
		},
		fontFamily: {
			'mono': ['"Space Mono"', 'monospace'],
			'noto': ['"Noto Sans KR"', 'sans-serif'],
		},
		extend: {
			backgroundImage: {
			   	'body': "url('img/grid-bg1.jpg')",
				'trends': "url('https://ec-prod.scene7.com/is/image/ECPROD/mobile_background?$png$&jpegSize=100&wid=599')",
				'trends--md': "url('https://ec-prod.scene7.com/is/image/ECPROD/tablet_background?$png$&jpegSize=200&wid=1199')",
			},
			spacing: {
				'2.7': '.688rem',
				'.75': '.188rem',
				'3.3': '.813rem',
				'3.7': '.938rem',
				 '18': '4.5rem',
			},
			fontSize: {
				'xxs': ['.625rem'],
				  's': ['.813rem'],
				  'm': ['.969rem', '1.688rem'],
				 'ml': ['1.063rem'],
				 'lg': ['1.125rem', '1.375'],
				'2xl': ['1.5rem', '2.188rem'],
			},
			lineHeight: {
				'6.5': ['1.688rem'],
			}
		},
	},
	plugins: [],
}
