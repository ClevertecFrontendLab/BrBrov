import { SystemStyleObject } from '@chakra-ui/react';

export const mostJuicyComponentStyles: SystemStyleObject = {
    w: '100%',
    maxW: '1360px',
    marginTop: '20px',
    marginLeft: { base: '0', md: '28px' },
    flexDirection: 'column',
    gap: { base: '12px', md: '16px', lg: '24px' },
};

export const titleJuicyComponentStyles: SystemStyleObject = {
    fontFamily: 'inter',
    fontWeight: '500',
    fontSize: { base: '24', md: '36', lg: '48' },
    lineHeight: { base: '133%', md: '110%', lg: '100%' },
    color: '#000',
};

const buttonGeneralJuicyComponentStyles: SystemStyleObject = {
    w: { base: '167px' },
    h: { base: '40px' },
    borderRadius: '6px',
    padding: '0px 16px',
    width: '167px',
    height: '40px',
    gap: '8px',
    background: '#b1ff2e',
    fontFamily: 'inter',
    fontWeight: '600',
    fontSize: { lg: '18p', base: '16' },
    lineHeight: { lg: '156%', base: '150%' },
    color: '#000',
};

export const buttonTopJuicyComponentStyles: SystemStyleObject = {
    display: { base: 'none', md: 'inline-flex' },
    ...buttonGeneralJuicyComponentStyles,
};

export const buttonBottomJuicyComponentStyles: SystemStyleObject = {
    display: { base: 'inline-flex', md: 'none' },
    ...buttonGeneralJuicyComponentStyles,
};

export const containerJuicyComponentStyles: SystemStyleObject = {
    flexDirection: { base: 'column', sm: 'row', md: 'column', mlg: 'row' },
    flexWrap: { base: 'nowrap', sm: 'wrap', md: 'nowrap', lg: 'wrap' },
    justifyContent: 'space-between',
    rowGap: '24px',
};
