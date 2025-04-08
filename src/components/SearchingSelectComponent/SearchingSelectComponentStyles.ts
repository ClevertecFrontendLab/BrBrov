import { SystemStyleObject } from '@chakra-ui/react';

const defaultTextStyles: SystemStyleObject = {
    fontFamily: 'inter',
    fontWeight: '400',
};

export const searchingSelectComponentStyles: SystemStyleObject = {
    ...defaultTextStyles,
    w: '234px',
    h: '40px',
    fontSize: '16',
    lineHeight: '150%',
    color: 'rgba(0, 0, 0, 0.64)',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '6px',
    background: '#fff',
    _hover: {
        background: '#fff',
    },
    _active: {
        background: '#fff',
    },
};

export const searchingItemStyles: SystemStyleObject = {
    maxW: '234px',
    h: '32px',
    paddingLeft: '16px',
    alignItems: 'center',
    gap: '8px',
    _even: {
        background: '#fff',
    },
    _odd: {
        background: 'rgba(0, 0, 0, 0.06)',
    },
};

export const serachingItemTextStyles: SystemStyleObject = {
    '& .chakra-checkbox__control': {
        w: '12px',
        h: '12px',
        borderRadius: '2px',
        border: '2px solid #d7ff94',
    },
    '& .chakra-checkbox__label': {
        ...defaultTextStyles,
        fontSize: '14',
        lineHeight: '143%',
        color: '#1a202c',
    },
};

export const searchingAddItemStyles: SystemStyleObject = {
    display: 'flex',
    h: '48px',
    paddingLeft: '24px',
    alignItems: 'center',
    gap: '8px',
};

export const searchingAddItemTextStyles: SystemStyleObject = {
    display: 'inline-block',
    w: '234px',
    h: '32px',
    padding: '6px 12px',
    fontSize: '14',
    lineHeight: '143%',
    color: '#134b00',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '4px',
};
