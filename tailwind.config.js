module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    dark: '#F9BE00',
                    DEFAULT: '#FAC519',
                    light: '#FACB33',
                    lighter: '#FBD24D',
                    lightest: '#FBD866',
                },
                secondary: {
                    dark: '#4B1412',
                    DEFAULT: '#5D2B2A',
                    light: '#6F4341',
                    lighter: '#937271',
                    lightest: '#DBD0D0',
                },
                success: {
                    dark: '#59D9BA',
                    DEFAULT: '#31D0AA',
                    light: '#64DCBF',
                    lighter: '#98E8D4',
                    lightest: '#EAFAF6',
                },
                text: '#221F1F',
                'suble-text': '#8C8CA1',
                accent: '#ECF1F4',
                'accent-warning': '#D2202F',
                'accent-ready': '#54A68D',
                'accent-porder': '#1E81B0',
            },
            fontSize: {
                largest: '48px',
                larger: '40px',
                large: '24px',
                body: '16px',
                small: '14px',
                smaller: '10px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
