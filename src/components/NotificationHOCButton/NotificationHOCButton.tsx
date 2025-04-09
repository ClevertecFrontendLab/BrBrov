import { Flex, IconProps, SystemStyleObject, Text } from '@chakra-ui/react';
import { ComponentType, ReactElement } from 'react';

import NotificationComponentType from '../../types/NotificationComponentType';

const defaultWrapperStyle: SystemStyleObject = {
    w: { base: '56px', md: '85px' },
    h: { base: '24px', md: '40px', xl: '85px' },
    justifyContent: 'center',
    alignItems: 'center',
    gap: { base: '6px', md: '8px' },
};

const defaultIconStyle: SystemStyleObject = {
    w: { base: '12px', lg: '16px', md: '16px' },
    h: { base: '12px', lg: '16px', md: '16px' },
};

const defaultTextStyle: SystemStyleObject = {
    fontFamily: 'inter',
    fontWeight: '600',
    fontSize: { base: '12', md: '16' },
    lineHeight: { base: '133%', md: '150%' },
    color: '#2db100',
};

function NotificationHOCButton(
    IconComponent: ComponentType<IconProps>,
): ComponentType<NotificationComponentType & IconProps> {
    return function NotificationComponent({
        countClicks,
        wrapperStyles = defaultWrapperStyle,
        iconStyles = defaultIconStyle,
        textStyles = defaultTextStyle,
    }: NotificationComponentType): ReactElement<NotificationComponentType> {
        return (
            <Flex sx={wrapperStyles}>
                <IconComponent sx={iconStyles} />
                <Text sx={textStyles}>{countClicks}</Text>
            </Flex>
        );
    };
}

export default NotificationHOCButton;
