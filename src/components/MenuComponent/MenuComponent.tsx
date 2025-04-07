import { Accordion } from '@chakra-ui/react';
import { ReactElement, useContext } from 'react';

import MenuContext from '~/context/menu-context/menuContext';
import MenuItemType from '~/types/MenuItemType';
import MenuListType from '~/types/MenuListType';

import MenuItemComponent from '../MenuItemComponent/MenuItemComponent';

function MenuComponent(): ReactElement {
    const menuContext: MenuListType = useContext<MenuListType>(MenuContext);
    console.dir(menuContext);
    return (
        <Accordion allowMultiple>
            {menuContext.map((item: MenuItemType, index: number) => (
                <MenuItemComponent
                    key={`${index}_${item.name}`}
                    submenu={item.submenu}
                    icon={item.icon}
                    name={item.name}
                />
            ))}
        </Accordion>
    );
}

export default MenuComponent;
