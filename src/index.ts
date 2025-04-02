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
});

//TODO: add global styles
// console.log(mainTheme);

export default mainTheme;
