import PotIcon from '~/custom-icons/PotIcon';
import MenuItemType from '~/types/MenuItemType';

import { firstDishes } from './firstDishesSubItems';

export const firstDishesItems: MenuItemType = {
    submenu: firstDishes,
    name: 'Первые блюда',
    hrefUrl: null,
    icon: PotIcon,
};
