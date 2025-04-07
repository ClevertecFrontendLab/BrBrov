import { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';

import menuList from '~/constants/menuList';
import MenuContext from '~/context/menu-context/menuContext';

import MenuComponent from '../MenuComponent/MenuComponent';
import navigationMenuComponentStyles from './NavigationMenuComponentStyles';

function NavigationMenuComponent(): ReactElement {
    return (
        <Flex sx={navigationMenuComponentStyles}>
            <MenuContext value={menuList}>
                <MenuComponent />
            </MenuContext>
        </Flex>
    );
}

export default NavigationMenuComponent;
