import { extendTheme } from '@chakra-ui/react';

type ConfTheme = ReturnType<typeof extendTheme>;

const mainTheme: ConfTheme = extendTheme({
    breakpoints: {
        base: '0em',
        sm: '410px',
        md: '769px',
        lg: '1000px',
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

//TODO: add global styles
// console.log(mainTheme);

export default mainTheme;
