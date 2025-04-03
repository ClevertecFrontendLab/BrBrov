import { IconProps } from '@chakra-ui/react';

import HeartFlagIcon from '~/custom-icons/HeartFlagIcon';

import NotificationComponentType from '../../types/NotificationComponentType';
import NotificationHOCButton from '../NotificationHOCButton/NotificationHOCButton';

const NotificationHeartFlagComponent: React.ComponentType<NotificationComponentType & IconProps> =
    NotificationHOCButton(HeartFlagIcon);

export default NotificationHeartFlagComponent;
