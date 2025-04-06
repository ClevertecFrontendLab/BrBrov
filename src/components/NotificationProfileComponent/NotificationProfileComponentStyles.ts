import { SystemStyleObject } from '@chakra-ui/react';

const notificationProfileStyles: SystemStyleObject = {
    position: { base: 'static', md: 'absolute' },
    // display: { base: 'flex', xl: 'none', lg: 'none' },
    flexDirection: { base: 'row', md: 'column' },
    w: { base: '187px', md: '203px' },
    h: { base: 'unset', md: '200px' },
    top: { base: 'unset', md: '80px' },
    right: { base: 'unset', md: '0' },
    marginLeft: 'auto',
    padding: { base: 'unset', md: '16px 56px 16px 67px' },
    justifyContent: 'center',
    gap: { base: 'unset', md: '24px' },
};

export default notificationProfileStyles;
