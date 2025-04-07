import { SystemStyleObject } from '@chakra-ui/react';

export const menuItemComponentsStyles: SystemStyleObject = {
    display: 'flex',
    w: '230px',
    paddingLeft: '0',
    justifyContent: 'space-between',
    alignContent: 'center',
    _hover: {
        backgroundColor: '#eaffc7',
    },
};

export const menuItemStyles: SystemStyleObject = {
    h: '32px',
    gap: '12px',
};

export const menuItemTextStyles: SystemStyleObject = {
    fontFamily: 'inter',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#000',
};
