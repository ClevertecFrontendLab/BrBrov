import MenuListType from '~/types/MenuListType';

import { beverages } from './beverages/beveragesItems';
import { childDishes } from './child-dishes/childDishesItems';
import { clinicalNutritions } from './clinical-nutrition/clinicalNutritionItems';
import { desserts } from './desserts/dessertsItems';
import { firstDishesItems } from './first-dishes/firstDishesItems';
import { grillDishes } from './grill-dishes/grillDishesItems';
import { national } from './national/nationalItems';
import { preparations } from './preparations/preparationsItems';
import { salad } from './salasds/saladsItems';
import { saucess } from './sauces/saucesItems';
import { secondDishesItem } from './second-dishes/secondDishesItem';
import { snacks } from './snacks/snacksItem';
import { veganCusine } from './vegan-cuisine/veganCusineItems';

const menuList: MenuListType = [
    salad,
    snacks,
    firstDishesItems,
    secondDishesItem,
    desserts,
    grillDishes,
    veganCusine,
    childDishes,
    clinicalNutritions,
    national,
    saucess,
    beverages,
    preparations,
];

export default menuList;
