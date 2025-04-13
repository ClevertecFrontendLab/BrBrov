import { SystemStyleObject } from '@chakra-ui/react';

export const culinaryBlogsComponentStyles: SystemStyleObject = {
    w: '100%',
    maxW: '1360px',
    marginTop: { base: '32px', md: '40px' },
    marginLeft: { base: '0', md: '24px', mlg: '24px' },
    padding: { base: '12px', md: '24px' },
    flexDirection: 'column',
    gap: { base: '12px', sm: '16px', mlg: '24px' },
    borderRadius: '16px',
    background: '#c4ff61',
};

export const headingCulinaryBlogsComponentStyles: SystemStyleObject = {
    fontFamily: 'inter',
    fontWeight: { base: '500', mlg: '400' },
    fontSize: { base: '24', md: '30', mlg: '36' },
    lineHeight: { base: '133%', md: '120%', mlg: '111%' },
    color: '#000',
};

const buttonCulinaryBlogs: SystemStyleObject = {
    padding: '0px 16px',
    borderRadius: '6px',
    fontFamily: 'inter',
    fontWeight: '600',
    fontSize: { base: '16px', ml: '18px' },
    lineHeight: { base: '150%', mlg: '156' },
    color: '#000',
    background: '#c4ff61',
};

export const buttonTopCulinaryBlogsStyles: SystemStyleObject = {
    ...buttonCulinaryBlogs,
    display: { base: 'none', md: 'flex' },
};

export const buttonBottomCulinaryBlogsStyles: SystemStyleObject = {
    ...buttonCulinaryBlogs,
    display: { base: 'flex', md: 'none' },
};

export const containerCulinaryBlogComponentStyles: SystemStyleObject = {
    flexDirection: { base: 'column', sm: 'row' },
    gap: { base: '12px', md: '16px' },
};
