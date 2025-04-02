import { extendTheme } from '@chakra-ui/react';

type ConfTheme = ReturnType<typeof extendTheme>;

const mainTheme: ConfTheme = extendTheme({
    breakpoints: {
        base: '0em', // 0px
        sm: '360px', // 480px
        md: '768px', // 768px
        lg: '1440px', // 992px
        xl: '1920px', // 1280px
        '2xl': '2560px', // 1536px
    },
});

//TODO: add global styles
// console.log(mainTheme);

export default mainTheme;
