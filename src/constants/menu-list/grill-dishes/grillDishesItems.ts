import DishwasherIcon from '~/custom-icons/DishwasherIcon';
import MenuItemType from '~/types/MenuItemType';

import { grillDishesItems } from './grillDishesSubItems';

export const grillDishes: MenuItemType = {
    submenu: grillDishesItems,
    name: 'Блюда на гриле',
    icon: DishwasherIcon,
};
