import { SystemStyleObject } from '@chakra-ui/react';

export const carouselCardComponentStyles: SystemStyleObject = {
    display: 'inline-block',
    boxSizing: 'border-box',
    w: { base: '158px', mlg: '322px', md: '277px' },
    h: { base: '220px', md: '402px', mlg: '414px' },
    marginLeft: { base: '12px', mlg: '24px', md: '12px' },
    padding: '0',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '8px',
};
export const carouselCardStyles: SystemStyleObject = {
    position: 'relative',
    w: '100%',
    flexDirection: 'column',
    overflowX: 'hidden',
};

export const carouselCardBodyStyles: SystemStyleObject = {
    display: 'flex',
    w: '100%',
    padding: '0',
    flexDirection: 'column',
    boxShadow: 'none',
};

export const carouselCardImageStyles: SystemStyleObject = {
    w: { base: '158px', md: '277px', mlg: '322px' },
    h: { base: '128px', md: '230px' },
    borderTopRadius: '8px',
    borderTopEndRadius: '8px',
};

export const carouselCardSubscriptionStyles: SystemStyleObject = {
    marginTop: { base: '14px', sm: '8px', mlg: '24px' },
    marginLeft: { base: '8px', sm: '11px', mlg: '16px' },
    marginRight: { base: '8px', sm: '11px', mlg: '16px' },
    padding: '0',
};

const generalTextStyles: SystemStyleObject = {
    fontFamily: 'inter',
    fontWeight: '500',
    color: '#000',
};

export const carouselCardHeadingStyles: SystemStyleObject = {
    ...generalTextStyles,
    fontSize: { base: '16', md: '18', mlg: '20' },
    lineHeight: { base: '150%', sm: '156%', mlg: '140%' },
    whiteSpace: 'normal',
};

export const carouselCardSubscriptionTextStyles: SystemStyleObject = {
    display: { base: 'none', md: '-webkit-box' },
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    whiteSpace: 'normal',
    ...generalTextStyles,
    marginTop: '8px',
    fontWeight: '400',
    fontSize: '14',
    lineHeight: '143%',
};

export const carouselCardNotifyStyle: SystemStyleObject = {
    ...carouselCardSubscriptionStyles,
    display: 'flex',
    margin: { base: '4px 24px 0', md: '24px 24px 0' },
    justifyContent: { base: 'flex-start', md: 'space-between' },
};

const carouselCardGeneralBadgeStyles: SystemStyleObject = {
    paddingLeft: '8px',
    paddingRight: '8px',
    alignItems: 'center',
    gap: '8px',
    textTransform: 'none',
    fontWeight: '400',
    fontSize: '14',
    lineHeight: '143%',
    borderRadius: '4px',
    background: '#d7ff94',
};

export const carouselCardBadgeStyles: SystemStyleObject = {
    display: { base: 'none', md: 'flex' },
    ...carouselCardGeneralBadgeStyles,
};

export const carouselCardBadgeTopStyles: SystemStyleObject = {
    position: 'absolute',
    display: { base: 'flex', md: 'none' },
    top: '8px',
    left: '8px',
    ...carouselCardGeneralBadgeStyles,
};

export const carouselCardBadgeIconStyles: SystemStyleObject = {
    w: '16px',
    h: '16px',
};
