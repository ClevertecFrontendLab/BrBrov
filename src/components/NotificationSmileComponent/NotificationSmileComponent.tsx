import { IconProps } from '@chakra-ui/react';

import SmileIcon from '~/custom-icons/SmileIcon';

import NotificationComponentType from '../../types/NotificationComponentType';
import NotificationHOCButton from '../NotificationHOCButton/NotificationHOCButton';

const NotificationSmileComponent: React.ComponentType<NotificationComponentType & IconProps> =
    NotificationHOCButton(SmileIcon);

export default NotificationSmileComponent;
