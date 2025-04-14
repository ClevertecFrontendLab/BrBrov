import { SystemStyleObject } from '@chakra-ui/react';
const generalTextStyles: SystemStyleObject = {
    fontFamily: 'inter',
    fontWeight: '500',
};

export const headingKitchenComponentStyles: SystemStyleObject = {
    ...generalTextStyles,
    flexShrink: { base: '1', lg: '0' },
    fontSize: { base: '24', md: '36', lg: '48' },
    lineHeight: { base: '133%', md: '111%', lg: '100%' },
    color: '#000',
};

export const subscribtionKitchenComponentStyles: SystemStyleObject = {
    ...generalTextStyles,
    fontSize: { base: '14', md: '16' },
    lineHeight: { base: '143%', md: '150%' },
    color: 'rgba(0, 0, 0, 0.64)',
};
