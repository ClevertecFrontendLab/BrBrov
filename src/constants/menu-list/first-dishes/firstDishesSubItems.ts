import SubMenuItemType from '~/types/SubMenuType';

const meatSoups: SubMenuItemType = {
    name: 'Мясные супы',
    hrefUrl: null,
};

const vegetablesSoups: SubMenuItemType = {
    name: 'Овощные супы',
    hrefUrl: null,
};

const clearSoups: SubMenuItemType = {
    name: 'Бульоны',
    hrefUrl: null,
};

const coldSoups: SubMenuItemType = {
    name: 'Холодные супы',
    hrefUrl: null,
};

const dietarySoups: SubMenuItemType = {
    name: 'Диетические супы',
    hrefUrl: null,
};

export const firstDishes: Array<SubMenuItemType> = [
    meatSoups,
    vegetablesSoups,
    clearSoups,
    coldSoups,
    dietarySoups,
];
