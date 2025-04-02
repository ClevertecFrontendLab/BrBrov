import { extendTheme } from '@chakra-ui/react';

type ConfTheme = ReturnType<typeof extendTheme>;

const mainTheme: ConfTheme = extendTheme({
    breakpoints: {
        base: '0em',
        sm: '360px',
        md: '768px',
        lg: '1440px',
        xl: '1920px',
        '2xl': '2560px',
    },
    font: {
        rubik: 'Rubik, sans-serif',
        inter: 'Inter, sans-serif',
        robot: 'Roboto, sans-serif',
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
