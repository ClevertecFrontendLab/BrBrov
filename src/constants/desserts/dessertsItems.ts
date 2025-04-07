import BreadAndRollingPinIcon from '~/custom-icons/BreadAndRollingPinIcon';
import MenuItemType from '~/types/MenuItemType';

import { dessertsItems } from './dessertsSubItems';

export const desserts: MenuItemType = {
    submenu: dessertsItems,
    name: 'Десерты и выпечка',
    hrefUrl: null,
    icon: BreadAndRollingPinIcon,
};
