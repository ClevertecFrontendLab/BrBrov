import { ComponentWithAs, IconProps } from '@chakra-ui/react';

import SubMenuItemType from './SubMenuType';

interface MenuItemType extends SubMenuItemType {
    submenu: Array<SubMenuItemType>;
    icon: ComponentWithAs<'svg', IconProps>;
}

export default MenuItemType;
