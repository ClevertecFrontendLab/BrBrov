import { SystemStyleObject } from '@chakra-ui/react';

const headerStyles: SystemStyleObject = {
    position: 'sticky',
    zIndex: '3',
    display: 'flex',
    w: '100%',
    h: { base: '64px', md: '80px' },
    boxSizing: 'border-box',
    top: '0',
    paddingLeft: { base: '16px', md: '20px' },
    paddingRight: { base: '16px', md: '56px' },
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffd3',
};

export default headerStyles;
