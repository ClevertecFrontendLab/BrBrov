import { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';

import NotificationHeartFlagComponent from '../NotificationHeartFlagComponent/NotificationHearftFlagComponent';
import NotificationPeopleComponent from '../NotificationPeopleComponent/NoticationPeopleComponent';
import NotificationSmileComponent from '../NotificationSmileComponent/NotificationSmileComponent';
import notificationProfileStyles from './NotificationProfileComponentStyles';

function NotificationProfileComponent(): ReactElement {
    return (
        <Flex sx={notificationProfileStyles}>
            <NotificationHeartFlagComponent countClicks='185' />
            <NotificationPeopleComponent countClicks='589' />
            <NotificationSmileComponent countClicks='587' />
        </Flex>
    );
}

export default NotificationProfileComponent;
