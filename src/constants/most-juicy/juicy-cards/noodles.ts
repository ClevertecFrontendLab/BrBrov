import FryingPanIcon from '~/custom-icons/FryingPanIcon';
import CardOfJuicyType from '~/types/CardOfJuicyType';

const noodles: CardOfJuicyType = {
    img: '/public/foods/noodles.jpg',
    categoryInfo: {
        categoryIcon: FryingPanIcon,
        category: 'Вторые блюда',
    },
    name: 'Лапша с курицей и шафраном',
    description:
        'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    owner: {
        avatar: '../../assets/avatars/Alex.jpg',
        nickName: 'Alex Cook',
    },
    likes: {
        hearts: '258',
        smile: '342',
    },
};

export default noodles;
