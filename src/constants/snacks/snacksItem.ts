import AppleIcon from '~/custom-icons/AppleIcon';
import MenuItemType from '~/types/MenuItemType';

import { snacksItems } from './snacksSubItems';

export const snacks: MenuItemType = {
    submenu: snacksItems,
    name: 'Закуски',
    icon: AppleIcon,
};
