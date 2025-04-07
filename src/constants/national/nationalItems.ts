import GlobalFoodIcon from '~/custom-icons/GlobalFoodIcon';
import MenuItemType from '~/types/MenuItemType';

import { nationalCuisineItems } from './nationalSubItems';

export const national: MenuItemType = {
    submenu: nationalCuisineItems,
    name: 'Национальные',
    icon: GlobalFoodIcon,
};
