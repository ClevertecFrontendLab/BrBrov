import { IconProps } from '@chakra-ui/react';

import PeopleIcon from '~/custom-icons/PeopleIcon';

import NotificationComponentType from '../../types/NotificationComponentType';
import NotificationHOCButton from '../NotificationHOCButton/NotificationHOCButton';

const NotificationPeopleComponent: React.ComponentType<NotificationComponentType & IconProps> =
    NotificationHOCButton(PeopleIcon);

export default NotificationPeopleComponent;
