import { SystemStyleObject } from '@chakra-ui/react';

export const footerMobileComponentStyles: SystemStyleObject = {
    display: { base: 'flex', md: 'none' },
    w: '100%',
    justifyContent: 'space-around',
    background: '#ffffd3',
    _first: {
        background:
            '#ffffd3, radial-gradient(62.52% 62.51% at 48.89% 37.5%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)',
    },
};

export const itemFooterMobileComponentStyles: SystemStyleObject = {
    w: '90px',
    h: '84px',
    flexDirection: 'column',
};

export const textFooterMobileComponentStyles: SystemStyleObject = {
    fontFamily: 'inter',
    fontWeight: '400',
    fontSize: '12',
    lineHeight: '133%',
    color: 'rgba(0, 0, 0, 0.64)',
};

export const firstTextFooterMobileComponentStyles: SystemStyleObject = {
    ...textFooterMobileComponentStyles,
    fontWeight: '500',
};
