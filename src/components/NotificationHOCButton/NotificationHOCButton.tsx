import { Flex, IconProps, SystemStyleObject, Text } from '@chakra-ui/react';
import { ComponentType, ReactElement } from 'react';

import NotificationComponentType from '../../types/NotificationComponentType';

const defaultWrapperStyle: SystemStyleObject = {
    w: { base: '56px', lg: '85px', xl: '85px' },
    h: { base: '24px', lg: '40px', xl: '85px' },
    justifyContent: 'center',
    alignItems: 'center',
    gap: { base: '6px', lg: '8px', xl: '8px' },
};

const defaultIconStyle: SystemStyleObject = {
    w: { base: '12px', lg: '16px', md: '16px' },
    h: { base: '12px', lg: '16px', md: '16px' },
};

const defaultTextStyle: SystemStyleObject = {
    fontFamily: 'inter',
    fontWeight: '600',
    fontSize: { base: '12', lg: '16', xl: '16' },
    lineHeight: { base: '133%', lg: '150%', xl: '150%' },
    color: '#2db100',
};

function NotificationHOCButton(
    IconComponent: ComponentType<IconProps>,
): ComponentType<NotificationComponentType & IconProps> {
    return function NotificationComponent(
        { countClicks }: NotificationComponentType & IconProps,
        wrapperStyles: SystemStyleObject = defaultWrapperStyle,
        iconStyles: SystemStyleObject = defaultIconStyle,
        textStyles: SystemStyleObject = defaultTextStyle,
    ): ReactElement<NotificationComponentType & IconProps> {
        return (
            <Flex sx={wrapperStyles}>
                <IconComponent sx={iconStyles} />
                <Text sx={textStyles}>{countClicks}</Text>
            </Flex>
        );
    };
}

export default NotificationHOCButton;
