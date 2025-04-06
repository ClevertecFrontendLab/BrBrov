import { SystemStyleObject } from '@chakra-ui/react';

const notificationProfileStyles: SystemStyleObject = {
    position: { base: 'static', xl: 'absolute', lg: 'absolute' },
    // display: { base: 'flex', xl: 'none', lg: 'none' },
    flexDirection: { base: 'row', xl: 'column', lg: 'column' },
    w: { base: '187px', md: '203px' },
    h: { base: 'unset', xl: '200px', lg: '200px' },
    top: { base: 'unset', xl: '80px', lg: '80px' },
    right: { base: 'unset', xl: '0', lg: '0' },
    marginLeft: 'auto',
    padding: { base: 'unset', lg: '16px 56px 16px 67px', xl: '16px 56px 16px 67px' },
    justifyContent: 'center',
    gap: { base: 'unset', lg: '24px', xl: '24px' },
};

export default notificationProfileStyles;
