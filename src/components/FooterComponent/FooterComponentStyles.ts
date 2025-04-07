import { SystemStyleObject } from '@chakra-ui/react';

const footerComponentStyles: SystemStyleObject = {
    position: 'fixed',
    zIndex: { base: '3', md: '1' },
    display: 'flex',
    w: '100%',
    h: { base: '84px', md: '144px' },
    bottom: '0',
};

export default footerComponentStyles;
