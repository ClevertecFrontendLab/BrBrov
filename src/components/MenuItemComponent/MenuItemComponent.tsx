import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Flex,
    Text,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

import MenuItemType from '~/types/MenuItemType';
import SubMenuItemType from '~/types/SubMenuType';

import SubMenuComponent from '../SubMenuComponent/SubMenuComponent';
import {
    menuItemComponentsStyles,
    menuItemStyles,
    menuItemTextStyles,
} from './MenuItemComponentStyles';

function MenuItemComponent(menuItem: MenuItemType): ReactElement {
    const MenuIcon: React.FC = menuItem.icon;

    return (
        <AccordionItem sx={{ border: 'none' }}>
            <AccordionButton sx={menuItemComponentsStyles}>
                <Flex sx={menuItemStyles}>
                    <MenuIcon />
                    <Text sx={menuItemTextStyles}>{menuItem.name}</Text>
                </Flex>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
                {menuItem.submenu.map((item: SubMenuItemType, index: number) => (
                    <SubMenuComponent
                        key={`${index}-${item.name}`}
                        name={item.name}
                        hrefUrl={item.hrefUrl}
                    />
                ))}
            </AccordionPanel>
        </AccordionItem>
    );
}

export default MenuItemComponent;
