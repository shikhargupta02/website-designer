/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            scale: {
                '115': '1.15',
            },
            backdropBlur: {
                xs: '3px',
            },
            animation: {
                'waving-hand': 'wave 2s linear infinite',
            },
            keyframes: {
                wave: {
                    '0%': { transform: 'rotate(0.0deg)' },
                    '10%': { transform: 'rotate(240deg)' },
                    '20%': { transform: 'rotate(-80deg)' },
                    '30%': { transform: 'rotate(140deg)' },
                    '40%': { transform: 'rotate(-40deg)' },
                    '50%': { transform: 'rotate(100.0deg)' },
                    '60%': { transform: 'rotate(0.0deg)' },
                    '100%': { transform: 'rotate(0.0deg)' },
                },
            },
        },
    },
    plugins: [],
};