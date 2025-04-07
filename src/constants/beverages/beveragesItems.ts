import TeaCupIcon from '~/custom-icons/TeaCupIcon';
import MenuItemType from '~/types/MenuItemType';

import { beveragesItems } from './beveragesSubItems';

export const beverages: MenuItemType = {
    submenu: beveragesItems,
    name: 'Напитки',
    hrefUrl: null,
    icon: TeaCupIcon,
};
