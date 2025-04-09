import { SystemStyleObject } from '@chakra-ui/react';

export const newRecipesComponentStyles: SystemStyleObject = {
    marginTop: '56px',
    w: '100%',
    maxW: { base: 'auto', mlg: '1360px', md: '880px' },
    flexDirection: 'column',
    gap: '24px',
};

export const newRecipeHeadingStyles: SystemStyleObject = {
    paddingLeft: { base: '0', mlg: '14px' },
    fontFamily: 'inter',
    fontWeight: '500',
    fontSize: '48',
    lineHeight: '100%',
    color: '#000',
};

export const newRecipeBoxStyles: SystemStyleObject = {
    position: 'relative',
    zIndex: { base: 'unset', md: '1' },
    w: 'auto',
    overflow: 'hidden',
    borderRadius: '6px',
};

export const newRecipeCarouselStyles: SystemStyleObject = {
    position: 'relative',
    zIndex: { base: 'unset', md: '1' },
    display: 'block',
    h: { base: '220px', lg: '414px', md: '402px' },
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    marginRight: { base: 'auto', mlg: '12px' },
    _first: {
        marginLeft: { base: '-12px', md: '-8px', mlg: '-8px' },
    },
};

const generalArrowStyles: SystemStyleObject = {
    position: 'absolute',
    zIndex: { base: 'unset', md: '2' },
    display: { base: 'none', md: 'inline-flex' },
    w: '48px',
    h: '48px',
    top: { base: '149px', lg: '147px' },
    borderRadius: '6px',
    backgroundColor: '#000',
    _hover: {
        backgroundColor: '#000',
    },
};

export const newRecipeArrowBackStyles: SystemStyleObject = {
    ...generalArrowStyles,
    left: { base: '0', md: '-8px', mlg: '0' },
};

export const newRecipeArrowNextStyles: SystemStyleObject = {
    ...generalArrowStyles,
    right: { base: '8px', md: '-8px', mlg: '0' },
};
