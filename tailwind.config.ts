import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	safelist: [
		'bg-blue-100', 'text-blue-800', 'border-blue-200',
		'bg-slate-100', 'text-slate-800', 'border-slate-200',
		'bg-cyan-100', 'text-cyan-800', 'border-cyan-200',
		'bg-emerald-100', 'text-emerald-800', 'border-emerald-200',
		'bg-yellow-100', 'text-yellow-800', 'border-yellow-200',
		'bg-green-100', 'text-green-800', 'border-green-200',
		'bg-gray-100', 'text-gray-800', 'border-gray-200',
		'bg-blue-200', 'border-blue-300',
		'bg-green-200', 'text-teal-800', 'border-teal-300',
		'bg-purple-100', 'text-purple-800', 'border-purple-200',
		'bg-orange-100', 'text-orange-800', 'border-orange-200',
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require('@tailwindcss/typography'),
		function ({ addUtilities }: any) {
			/* SCROLLBAR */
			const newUtilities = {
				".scrollbar-thin": {
					scrollbarWidth: "thin",
					scrollbarColor: "rgba(0, 0, 0, 0.7) white",
				},
				".scrollbar-webkit": {
					"&::-webkit-scrollbar": {
						width: "8px",
					},
					"&::-webkit-scrollbar-track": {
						backgroundColor: "white",
						borderRadius: "20px",
						border: "1px solid white",
					},
					"&::-webkit-scrollbar-thumb": {
						backgroundColor: "white",
						borderRadius: "50px",
						border: "1px solid white",
					}
				}
			}

			addUtilities(newUtilities, ["responsive", "hover"])
		}
	],/* require("tailwindcss-animate") */
} satisfies Config;