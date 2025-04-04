import MenuItemType from '~/types/MenuItemType';

import { clinicalNutritionItems } from './clinicalNutritionSubItems';

export const clinicalNutritions: MenuItemType = {
    submenu: clinicalNutritionItems,
    name: 'Лечебное питание',
    hrefUrl: null,
};
