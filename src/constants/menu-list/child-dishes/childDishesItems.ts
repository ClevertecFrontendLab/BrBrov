import BabyIcon from '~/custom-icons/BabyIcon';
import MenuItemType from '~/types/MenuItemType';

import { childDishesItems } from './childDishesSubItems';

export const childDishes: MenuItemType = {
    submenu: childDishesItems,
    name: 'Детские блюда',
    icon: BabyIcon,
};
