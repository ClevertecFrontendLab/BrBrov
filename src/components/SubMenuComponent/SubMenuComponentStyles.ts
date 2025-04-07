import { SystemStyleObject } from '@chakra-ui/react';

export const subMenuComponentStyles: SystemStyleObject = {
    h: '36px',
    paddingLeft: '10px',
    alignItems: 'center',
    gap: '11px',
    _hover: {
        backgroundColor: '#eaffc7',
    },
};

export const subMenuTextStyles: SystemStyleObject = {
    fontFamily: 'inter',
    fontWeight: '500',
    fontSize: '16',
    lineHeight: '150%',
    color: '#000',
};

const commonMarkStyle: SystemStyleObject = {
    h: '28px',
    boxSizing: 'border-box',
};

export const unmarkedStyle: SystemStyleObject = {
    ...commonMarkStyle,
    w: '7px',
    borderRight: '1px solid #c4ff61',
};

export const markedStyle: SystemStyleObject = {
    ...commonMarkStyle,
    w: '8px',
    borderRight: '8px solid #c4ff61',
};
