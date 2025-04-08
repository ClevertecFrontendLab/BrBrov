import AllergenType from '~/types/AllergenType';

const milk: AllergenType = {
    name: 'Мoлочные продукты',
    value: 'milk',
};

const egg: AllergenType = {
    name: 'Яйцо',
    value: 'Egg',
};

const fish: AllergenType = {
    name: 'Рыба',
    value: 'fish',
};

const clam: AllergenType = {
    name: 'Моллюски',
    value: 'clam',
};

const nuts: AllergenType = {
    name: 'Орехи',
    value: 'nuts',
};

const tomato: AllergenType = {
    name: 'Томат(помидоры)',
    value: 'tomato',
};

const citrus: AllergenType = {
    name: 'Цитрусовые',
    value: 'citrus',
};

const berries: AllergenType = {
    name: 'Клубника(ягоды)',
    value: 'berries',
};

const chocolate: AllergenType = {
    name: 'Шоколад',
    value: 'chocolate',
};

const allergens: Array<AllergenType> = [
    milk,
    egg,
    fish,
    clam,
    nuts,
    tomato,
    citrus,
    berries,
    chocolate,
];

export default allergens;
