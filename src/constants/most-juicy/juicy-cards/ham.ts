import FryingPanIcon from '~/custom-icons/FryingPanIcon';
import CardOfJuicyType from '~/types/CardOfJuicyType';

const ham: CardOfJuicyType = {
    img: '/public/foods/ham.jpg',
    categoryInfo: {
        categoryIcon: FryingPanIcon,
        category: 'Вторые блюда',
    },
    name: 'Пряная ветчина по итальянски',
    description:
        'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    owner: {
        avatar: '../../assets/avatars/HelenV.jpg',
        nickName: 'Елена Высоцкая',
    },
    likes: {
        hearts: '159',
        smile: '257',
    },
};

export default ham;
