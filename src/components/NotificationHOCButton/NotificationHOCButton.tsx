import { Flex, IconProps, SystemStyleObject, Text } from '@chakra-ui/react';
import { ComponentType, ReactElement } from 'react';

import NotificationComponentType from '../../types/NotificationComponentType';

const defaultWrapperStyle: SystemStyleObject = {
    w: '56px',
    h: '24px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6px',
};

const defaultIconStyle: SystemStyleObject = {};

const defaultTextStyle: SystemStyleObject = {
    fontFamily: 'inter',
    fontWeight: '600',
    fontSize: '12',
    lineHeight: '133%',
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
