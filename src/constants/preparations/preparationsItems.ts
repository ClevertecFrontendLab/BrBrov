import MenuItemType from '~/types/MenuItemType';

import { preparationItems } from './preparationsSubItems';

export const preparations: MenuItemType = {
    submenu: preparationItems,
    name: 'Загтовки',
    hrefUrl: null,
};
