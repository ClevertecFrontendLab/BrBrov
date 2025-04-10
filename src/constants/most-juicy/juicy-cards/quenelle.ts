import FryingPanIcon from '~/custom-icons/FryingPanIcon';
import CardOfJuicyType from '~/types/CardOfJuicyType';

const quenelle: CardOfJuicyType = {
    img: '/quenelle.jpg',
    categoryInfo: {
        categoryIcon: FryingPanIcon,
        category: 'Вторые блюда',
    },
    name: 'Кнели со спагетти',
    description:
        'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    likes: {
        hearts: '85',
        smile: '152',
    },
};

export default quenelle;
