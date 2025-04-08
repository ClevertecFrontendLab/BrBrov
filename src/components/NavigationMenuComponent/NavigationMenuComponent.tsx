import { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';

import menuList from '~/constants/menu-list/menuList';
import MenuContext from '~/context/menu-context/menuContext';

import MenuComponent from '../MenuComponent/MenuComponent';
import navigationMenuComponentStyles from './NavigationMenuComponentStyles';

function NavigationMenuComponent(): ReactElement {
    return (
        <Flex sx={navigationMenuComponentStyles}>
            <MenuContext.Provider value={menuList}>
                <MenuComponent />
            </MenuContext.Provider>
        </Flex>
    );
}

export default NavigationMenuComponent;
