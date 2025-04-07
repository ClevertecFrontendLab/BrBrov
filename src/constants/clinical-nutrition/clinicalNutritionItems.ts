import HealthPanIcon from '~/custom-icons/HealthPanIcon';
import MenuItemType from '~/types/MenuItemType';

import { clinicalNutritionItems } from './clinicalNutritionSubItems';

export const clinicalNutritions: MenuItemType = {
    submenu: clinicalNutritionItems,
    name: 'Лечебное питание',
    icon: HealthPanIcon,
};
