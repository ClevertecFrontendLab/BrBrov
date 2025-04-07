import { SystemStyleObject } from '@chakra-ui/react';

const navigationMenuComponentStyles: SystemStyleObject = {
    position: 'absolute',
    display: { base: 'none', md: 'flex' },
    width: '256px',
    height: { base: 'calc(100vh - 260px)' },
    top: { base: '64px', md: '104px' },
    flexDirection: 'column',
    overflowY: 'auto',
    '&::-webkit-scrollbar-button': {
        w: '0',
        h: '0',
    },
    '::-webkit-scrollbar': {
        appearance: 'none',
        w: '8px',
        borderRadius: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
    '::-webkit-scrollbar-thumb': {
        w: '8px',
        borderRadius: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.16)',
    },
};

export default navigationMenuComponentStyles;
