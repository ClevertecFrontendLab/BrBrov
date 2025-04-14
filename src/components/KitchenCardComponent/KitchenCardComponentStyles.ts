import { SystemStyleObject } from '@chakra-ui/react';

const generalTextStyles: SystemStyleObject = {
    fontFamily: 'inter',
    color: '#000',
};

export const headingKitchenCardComponentStyles: SystemStyleObject = {
    ...generalTextStyles,
    fontWeight: '500',
    fontSize: { base: '16', md: '20' },
    lineHeight: { base: '150%', md: '140%' },
};

export const describtionKitchenCardComponentStyles: SystemStyleObject = {
    ...generalTextStyles,
    fontWeight: '400',
    fontSize: { base: '14' },
    lineHeight: { base: '143%' },
};

export const badgeKitchenCardComponentStyles: SystemStyleObject = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    borderRadius: '4px',
    padding: { base: '2px 8px' },
    background: { base: '#ffffd3' },
    textTransform: 'none',
};

export const badgeTextKitchenCardComponentStyles: SystemStyleObject = {
    ...describtionKitchenCardComponentStyles,
};

export const notifyTextKitchenCardComponentStyles: SystemStyleObject = {
    fontWeight: '600',
    fontSize: '12',
    lineHeight: '133%',
    color: '#2db100',
};
