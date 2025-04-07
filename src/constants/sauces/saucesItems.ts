import PounderIcon from '~/custom-icons/PounderIcon';
import MenuItemType from '~/types/MenuItemType';

import { saucessItems } from './saucesSubItems';

export const saucess: MenuItemType = {
    submenu: saucessItems,
    name: 'Соусы',
    icon: PounderIcon,
};
