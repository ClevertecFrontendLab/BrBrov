import EggplantIcon from '~/custom-icons/EggplantIcon';
import MenuItemType from '~/types/MenuItemType';

import { salads } from './saladsSubItems';

export const salad: MenuItemType = {
    submenu: salads,
    name: 'Салаты',
    icon: EggplantIcon,
};
