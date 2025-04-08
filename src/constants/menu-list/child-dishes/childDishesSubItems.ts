import SubMenuItemType from '~/types/SubMenuType';

const firstDishes: SubMenuItemType = {
    name: 'Первые блюда',
    hrefUrl: null,
};

const secondDishes: SubMenuItemType = {
    name: 'Вторые блюда',
    hrefUrl: null,
};

const sideDishes: SubMenuItemType = {
    name: 'Гарниры',
    hrefUrl: null,
};

const pastry: SubMenuItemType = {
    name: 'Выпечка',
    hrefUrl: null,
};

const glutenFree: SubMenuItemType = {
    name: 'Без глютена',
    hrefUrl: null,
};

const sugarFree: SubMenuItemType = {
    name: 'Без сахара',
    hrefUrl: null,
};

const allergenFree: SubMenuItemType = {
    name: 'Без алергенов',
    hrefUrl: null,
};

const supplementaryFood: SubMenuItemType = {
    name: 'Блюда для прикорма',
    hrefUrl: null,
};

export const childDishesItems: Array<SubMenuItemType> = [
    firstDishes,
    secondDishes,
    sideDishes,
    pastry,
    glutenFree,
    sugarFree,
    allergenFree,
    supplementaryFood,
];
