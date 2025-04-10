import { IconProps } from '@chakra-ui/react';

import SubMenuItemType from './SubMenuType';

interface MenuItemType extends Pick<SubMenuItemType, 'name'> {
    submenu: Array<SubMenuItemType>;
    icon: React.FC<IconProps>;
}

export default MenuItemType;
