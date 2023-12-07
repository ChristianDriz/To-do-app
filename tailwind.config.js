/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark': '#1A1D1F',
                'semidark': '#24292D',
                'notwhite': '#F6F6F6',
                'textlight': '#475569',
                'textdark': '#94A3B8',
            },
        },
    },
    plugins: [],
}

