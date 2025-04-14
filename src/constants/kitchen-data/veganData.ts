import KitchenDataType from '~/types/KitchenDataType';

import cutlets from './kitchen-card/cutlets';
import potato from './kitchen-card/potato';
import rissole from './menu-items/rissole';
import soup from './menu-items/soup';
import steak from './menu-items/steak';

const veganData: KitchenDataType = {
    name: 'Веганская кухня',
    description:
        'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
    cards: [potato, cutlets],
    menu: [steak, rissole, soup],
};

export default veganData;
