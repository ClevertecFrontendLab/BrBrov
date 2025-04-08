import SubMenuItemType from '~/types/SubMenuType';

const beef: SubMenuItemType = {
    name: 'Говядина',
    hrefUrl: null,
};

const pork: SubMenuItemType = {
    name: 'Свинина',
    hrefUrl: null,
};

const bird: SubMenuItemType = {
    name: 'Птица',
    hrefUrl: null,
};

const fish: SubMenuItemType = {
    name: 'Рыба',
    hrefUrl: null,
};

const mashrooms: SubMenuItemType = {
    name: 'Грибы',
    hrefUrl: null,
};

const vegetables: SubMenuItemType = {
    name: 'Овощи',
    hrefUrl: null,
};

export const grillDishesItems: Array<SubMenuItemType> = [
    beef,
    pork,
    bird,
    fish,
    mashrooms,
    vegetables,
];
