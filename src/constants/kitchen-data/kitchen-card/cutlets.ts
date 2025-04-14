import FryingPanIcon from '~/custom-icons/FryingPanIcon';
import KitchenCardType from '~/types/KitchenCardType';

const cutlets: KitchenCardType = {
    name: 'Капустные котлеты',
    description:
        'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
    category: {
        categoryIcon: FryingPanIcon,
        category: 'Вторые блюда',
    },
    likes: {
        hearts: '2',
        smile: '1',
    },
};

export default cutlets;
