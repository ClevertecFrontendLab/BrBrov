import { SystemStyleObject } from '@chakra-ui/react';

export const recordRecipeComponentStyles: SystemStyleObject = {
    position: 'absolute',
    display: { base: 'none', md: 'flex' },
    boxSizing: 'border-box',
    w: '208px',
    h: '208px',
    top: '-66px',
    right: '0',
    paddingTop: '22px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    _hover: {
        background: 'radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)',
    },
};

export const textRecordRecipeStyles: SystemStyleObject = {
    fontFamily: 'inter',
    fontWeight: '400',
    fontSize: '12',
    lineHeight: '133%',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.64)',
};
