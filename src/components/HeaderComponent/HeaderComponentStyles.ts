import { SystemStyleObject } from '@chakra-ui/react';

const headerStyles: SystemStyleObject = {
    display: 'flex',
    w: '100%',
    h: { base: '64px', lg: '80px', xl: '80px' },
    boxSizing: 'border-box',
    paddingLeft: { base: '16px', md: '20px' },
    paddingRight: { base: '16px', xl: '56px', lg: '56px', md: '20px' },
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffd3',
};

export default headerStyles;
