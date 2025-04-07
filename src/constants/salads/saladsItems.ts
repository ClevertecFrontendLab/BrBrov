import EggplantIcon from '~/custom-icons/EggplantIcon';
import MenuItemType from '~/types/MenuItemType';

import { salads } from './saladsSubItems';

export const salad: MenuItemType = {
    name: 'Салаты',
    submenu: salads,
    hrefUrl: null,
    icon: EggplantIcon,
};
