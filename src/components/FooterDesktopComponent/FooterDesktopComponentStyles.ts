import { SystemStyleObject } from '@chakra-ui/react';

const commonTextStyles: SystemStyleObject = {
    fontFamily: 'inter',
    fontSize: '12',
    lineHeight: '133%',
};

export const footerDesktopComponentStyles: SystemStyleObject = {
    display: { base: 'none', md: 'flex' },
    width: '256px',
    height: '144px',
    padding: '0px 24px 32px 24px',
    flexDirection: 'column',
    gap: '16px',
};

export const footerTopTextStyles: SystemStyleObject = {
    ...commonTextStyles,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.24)',
};

export const footerMiddleTextStyles: SystemStyleObject = {
    ...commonTextStyles,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.64)',
};

export const signOutStyles: SystemStyleObject = {
    alignItems: 'center',
    gap: '6px',
};

export const footerBottomTextStyles: SystemStyleObject = {
    ...commonTextStyles,
    fontWeight: '600',
    color: '#000',
};
