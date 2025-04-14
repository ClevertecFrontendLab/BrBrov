import { SystemStyleObject } from '@chakra-ui/react';

export const mainContentHeaderStyles: SystemStyleObject = {
    paddingTop: { base: '16px', md: '32px' },
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
};

const generalTextStyles: SystemStyleObject = {
    fontFamily: 'inter',
    textAlign: 'center',
};

export const contentTitleStyles: SystemStyleObject = {
    ...generalTextStyles,
    fontWeight: '700',
    fontSize: { base: '24', md: '48' },
    lineHeight: { base: '133 %', md: '100%' },
    color: '#000',
};

export const contentSubscribeStyles: SystemStyleObject = {
    ...generalTextStyles,
    fontWeight: '500',
    fontSize: '16',
    lineHeight: '150%',
    color: 'rgba(0, 0, 0, 0.48)',
};
