import FryingPanIcon from '~/custom-icons/FryingPanIcon';
import MenuItemType from '~/types/MenuItemType';

import { secondDishes } from './secondDishesSubItems';

export const secondDishesItem: MenuItemType = {
    submenu: secondDishes,
    name: 'Вторые блюда',
    hrefUrl: null,
    icon: FryingPanIcon,
};
