import { SystemStyleObject } from '@chakra-ui/react';

const navigationMenuComponentStyles: SystemStyleObject = {
    display: { base: 'none', lg: 'flex', xl: 'flex' },
    width: '256px',
    height: { base: 'calc(100vh - 64px)', lg: 'calc(100vh - 80px)', xl: 'calc(100vh - 80px)' },
    padingTop: '24px',
    flexDirection: 'column',
    justifyContent: 'space-between',
};

export default navigationMenuComponentStyles;
