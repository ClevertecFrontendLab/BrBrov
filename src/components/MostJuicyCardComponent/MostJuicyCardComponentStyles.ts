import { SystemStyleObject } from '@chakra-ui/react';

export const cardMostJuicyComponentStyles: SystemStyleObject = {
    position: 'relative',
    display: 'flex',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: { base: '328px', xl: '668px', md: '100%', sm: '100%' },
    flexDirection: 'row',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '8px',
};

export const imageMostJuicyComponentStyles: SystemStyleObject = {
    w: { base: '158px', md: '346px' },
    h: { base: '128px', md: '244px' },
};

export const ownerMostJuicyComponentStyles: SystemStyleObject = {
    position: 'absolute',
    display: { base: 'none', md: 'flex' },
    top: '196px',
    left: '24px',
    padding: '4px 8px',
    borderRadius: '4px',
    background: ' #d7ff94',
    gap: '8px',
};

const smTextStyles: SystemStyleObject = {
    fontFamily: 'inter',
    fontWeight: '400',
    fontSize: '14',
    lineHeight: '143%',
    color: '#000',
};

export const textOwnerMostJuicyComponentStyles: SystemStyleObject = {
    ...smTextStyles,
};

export const topBadgeMostJuicyComponentStyles: SystemStyleObject = {
    position: 'absolute',
    display: { base: 'flex', md: 'none' },
    h: '24px',
    top: '4px',
    left: '4px',
    padding: '2px 4px',
    gap: '4px',
    borderRadius: '4px',
    background: '#ffffd3',
    ...smTextStyles,
};

export const categoryBadgeMostJuicyComponentStyles: SystemStyleObject = {
    ...topBadgeMostJuicyComponentStyles,
    position: 'static',
    display: { base: 'none', md: 'inline-block' },
};

export const infoCardMostJuicyComponentStyles: SystemStyleObject = {
    display: 'flex',
    w: { base: 'calc(100% - 158px)', md: 'calc(100% - 346px)' },
    flexDirection: 'column',
    gap: { base: '0', md: '24px' },
};

export const cardHeaderMostJuicyComponentStyles: SystemStyleObject = {
    display: 'flex',
    margin: { base: '8px 8px 0', md: '20px 24px 0' },
    padding: '0',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
};

export const cardBodyMostJuicyComponentStyles: SystemStyleObject = {
    display: 'flex',
    maxWidth: { base: 'unset', sm: '277px', md: 'unset' },
    margin: { base: '0 8px', md: '0 24px' },
    padding: '0',
    flexDirection: 'column',
    gap: '8px',
};

export const cardBodyHeaderMostJuicyComponentStyles: SystemStyleObject = {
    width: '100%',
    overflow: { base: 'visible', lg: 'hidden' },
    textOverflow: { base: 'unset', lg: 'ellipsis' },
    whiteSpace: { base: 'normal', lg: 'nowrap' },
    fontFamily: 'inter',
    fontWeight: '500',
    fontSize: '20',
    lineHeight: '140%',
    color: '#000',
};

export const cardDescriptionMostJuicyComponentStyles: SystemStyleObject = {
    fontFamily: 'inter',
    fontWeight: '400',
    fontSize: '14',
    lineHeight: '143%',
    color: '#000',
};

export const cardFooterMostJuicyComponent: SystemStyleObject = {
    display: 'flex',
    maxWidth: { base: 'unset', sm: '277px', md: 'unset' },
    margin: { base: '0 8px 4px', md: '0 24px 20px' },
    padding: '0',
    justifyContent: 'flex-end',
    gap: { base: '12px', md: '8px' },
};

export const saveBtnMostJuicyComponent: SystemStyleObject = {
    w: { base: '24px', md: '122px' },
    h: { base: '24px', md: '32px' },
    padding: '0px 6px',
    gap: '8px',
    fontFamily: 'inter',
    fontWeight: '600',
    fontSize: { base: '0', sm: '14' },
    lineHeight: { base: '143%', sm: '143%' },
    color: 'rgba(0, 0, 0, 0.8)',
    background: 'rgba(255, 255, 255, 0.06)',
    border: '1px solid rgba(0, 0, 0, 0.48)',
    borderRadius: '6px',
};

export const saveIconMostJuicyComponent: SystemStyleObject = {
    display: { base: 'inline-block' },
    w: { base: '12px', md: '14px' },
    h: { base: '12px', md: '14px' },
};

export const prepareBtnMostJuicyComponent: SystemStyleObject = {
    w: { base: '70px', sm: '87px' },
    h: { base: '24px', md: '32px' },
    padding: '0px 8px',
    gap: { base: '6px', md: '8px' },
    fontFamily: 'inter',
    fontWeight: '600',
    fontSize: { base: '12', sm: '14' },
    lineHeight: { base: '133%', sm: '143%' },
    color: '#fff',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '6px',
    background: 'rgba(0, 0, 0, 0.92)',
};

export const prepareIconMostJuicyComponent: SystemStyleObject = {
    display: { base: 'none', sm: 'inline-block', md: 'none' },
    w: { base: '12px', md: '14px' },
    h: { base: '12px', md: '14px' },
};
