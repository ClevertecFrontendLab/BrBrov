import { SystemStyleObject } from '@chakra-ui/react';

export const cardMostJuicyComponentStyles: SystemStyleObject = {
    position: 'relative',
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    gap: '24px',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '8px',
};

export const imageMostJuicyComponentStyles: SystemStyleObject = {
    w: { base: '158', md: '346px' },
    h: { base: '128', md: '244px' },
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

export const infoMostJuicyComponentStyles: SystemStyleObject = {
    display: 'flex',
    padding: { base: '8px 8px 4px', md: '20px 24px' },
    flexDirection: 'column',
    gap: { base: '0', md: '24px' },
};
