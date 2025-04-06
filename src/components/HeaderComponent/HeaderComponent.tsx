import { chakra, ChakraComponent } from '@chakra-ui/react';
import { ReactElement } from 'react';

import NotificationProfileComponent from '~/components/NotificationProfileComponent/NotificationProfileComponent';

import BreadcrumbComponent from '../BreadCrumbComponent/BreadCrumpComponent';
import BurgerButton from '../BurgerButtonComponent/BurgerButtonComponent';
import CardAvatarComponent from '../CardAvatarComponent/CardAvatarComponent';
import LogoComponent from '../LogoComponent/LogoComponent';
import headerStyles from './HeaderComponentStyles';

const HeaderChakra: ChakraComponent<'header', object> = chakra('header');

function HeaderComponent(): ReactElement {
    return (
        <HeaderChakra sx={headerStyles}>
            <LogoComponent />
            <BreadcrumbComponent />
            <CardAvatarComponent />
            <NotificationProfileComponent />
            <BurgerButton />
        </HeaderChakra>
    );
}

export default HeaderComponent;
