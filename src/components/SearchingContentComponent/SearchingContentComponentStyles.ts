import { SystemStyleObject } from '@chakra-ui/react';

export const searchingContentComponentStyles: SystemStyleObject = {
    display: 'flex',
    w: '100%',
    maxW: '520px',
    marginTop: '32px',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '18px',
};

export const searchingContentTopStyles: SystemStyleObject = {
    w: '100%',
    alignItems: 'center',
    gap: '12px',
};

export const serchingButtonContentStyles: SystemStyleObject = {
    display: 'block',
    w: { base: '32px', md: '48px' },
    minW: 'unset',
    h: { base: '32px', md: '48px' },
    border: '1px solid rgba(0, 0, 0, 0.48)',
    borderRadius: '6px',
    background: 'unset',
};

const inputTextStyles: SystemStyleObject = {
    fontFamily: 'inter',
    fontWeight: '400',
    fontSize: '18px',
    color: '#134b00',
};

export const searchingContentInput: SystemStyleObject = {
    w: '100%',
    h: { base: '32px', md: '48px' },
    ...inputTextStyles,
    border: '1px solid rgba(0, 0, 0, 0.48)',
    borderRadius: '6px',
    transition: 'none',
    _hover: {
        borderColor: 'rgba(0, 0, 0, 0.66)',
    },
    _placeholder: {
        ...inputTextStyles,
    },
    _focus: {
        boxShadow: 'none',
        borderColor: 'rgba(0, 0, 0, 0.66)',
    },
};

export const searchingContentBottomStyles: SystemStyleObject = {
    display: { base: 'none', md: 'flex' },
    w: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
};

export const searchingContentAllergenStyles: SystemStyleObject = {
    ...inputTextStyles,
    margin: '0',
    fontWeight: '500',
    fontSize: '16',
    lineHeight: '150%',
    color: '#000',
};
