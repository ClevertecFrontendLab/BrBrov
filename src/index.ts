import { extendTheme } from '@chakra-ui/react';

const mainTheme: Record<string, unknown> = extendTheme({
    breakpoints: {
        base: '0em',
        sm: '410px',
        md: '769px',
        lg: '1000px',
        mlg: '1441px',
        xl: '1920px',
    },
    fonts: {
        rubik: 'Rubik, sans-serif',
        inter: 'Inter, sans-serif',
        roboto: 'Roboto, sans-serif',
    },
    fontSizes: {
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '30': '30px',
        '36': '36px',
        '48': '48px',
    },
});

export default mainTheme;
