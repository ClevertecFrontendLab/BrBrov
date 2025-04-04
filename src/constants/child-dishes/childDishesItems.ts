import MenuItemType from '~/types/MenuItemType';

import { childDishesItems } from './childDishesSubItems';

export const childDishes: MenuItemType = {
    submenu: childDishesItems,
    name: 'Детские блюда',
    hrefUrl: null,
};
