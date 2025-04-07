import VegetablePasteIcon from '~/custom-icons/VegetablePasteIcon';
import MenuItemType from '~/types/MenuItemType';

import { preparationItems } from './preparationsSubItems';

export const preparations: MenuItemType = {
    submenu: preparationItems,
    name: 'Заготовки',
    hrefUrl: null,
    icon: VegetablePasteIcon,
};
