import SubMenuItemType from '~/types/SubMenuType';

const meatSauces: SubMenuItemType = {
    name: 'Соусы мясные',
    hrefUrl: null,
};

const cheesesSauces: SubMenuItemType = {
    name: 'Соусы сырные',
    hrefUrl: null,
};

const marinades: SubMenuItemType = {
    name: 'Маринады',
    hrefUrl: null,
};

export const saucessItems: Array<SubMenuItemType> = [meatSauces, cheesesSauces, marinades];
