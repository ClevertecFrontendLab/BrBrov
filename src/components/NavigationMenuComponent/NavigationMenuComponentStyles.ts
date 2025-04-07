import { SystemStyleObject } from '@chakra-ui/react';

const navigationMenuComponentStyles: SystemStyleObject = {
    position: 'absolute',
    display: { base: 'none', md: 'flex' },
    width: '256px',
    height: { base: 'calc(100vh - 260px)' },
    top: { base: '64px', md: '104px' },
    flexDirection: 'column',
    overflowY: 'auto',
};

export default navigationMenuComponentStyles;
