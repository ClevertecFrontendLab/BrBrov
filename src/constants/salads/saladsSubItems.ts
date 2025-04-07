import SubMenuItemType from '~/types/SubMenuType';

const meatSalad: SubMenuItemType = {
    name: 'Мясной салат',
    hrefUrl: null,
};

const fishSalad: SubMenuItemType = {
    name: 'Рыбный салат',
    hrefUrl: null,
};

const vegetableSalad: SubMenuItemType = {
    name: 'Овощной салат',
    hrefUrl: null,
};

const warmSalad: SubMenuItemType = {
    name: 'Теплый салат',
    hrefUrl: null,
};

export const salads: Array<SubMenuItemType> = [meatSalad, fishSalad, vegetableSalad, warmSalad];
