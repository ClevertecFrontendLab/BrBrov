import BayLeafIcon from '~/custom-icons/BayLeafIcon';
import MenuItemType from '~/types/MenuItemType';

import { veganCusineItems } from './veganCusineSubItems';

export const veganCusine: MenuItemType = {
    submenu: veganCusineItems,
    name: 'Веганская кухня',
    hrefUrl: null,
    icon: BayLeafIcon,
};
