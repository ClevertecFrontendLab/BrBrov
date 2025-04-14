import FryingPanIcon from '~/custom-icons/FryingPanIcon';
import KitchenCardType from '~/types/KitchenCardType';

const potato: KitchenCardType = {
    name: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
    description:
        'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
    category: {
        categoryIcon: FryingPanIcon,
        category: 'Вторые блюда',
    },
    likes: {
        hearts: '1',
        smile: '1',
    },
};

export default potato;
