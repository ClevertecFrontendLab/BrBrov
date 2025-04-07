import { SystemStyleObject } from '@chakra-ui/react';

const navigationMenuComponentStyles: SystemStyleObject = {
    position: 'absolute',
    display: { base: 'none', lg: 'flex', xl: 'flex' },
    width: '256px',
    height: { base: 'calc(100vh - 200px)', lg: 'calc(100vh - 200px)', xl: 'calc(100vh - 200px)' },
    top: { base: '64px', md: '104px' },
    flexDirection: 'column',
    overflowY: 'auto',
};

export default navigationMenuComponentStyles;
