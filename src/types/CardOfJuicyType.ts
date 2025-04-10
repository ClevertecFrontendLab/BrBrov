import CategoryInfoTypes from './CategoryInfoTypes';
import LikesInfoTypes from './LikesInfoType';

interface CardOfJuicyType {
    img: string;
    owner?: {
        avatar: string;
        nickName: string;
    };
    likes?: LikesInfoTypes;
    categoryInfo: CategoryInfoTypes;
    name: string;
    description: string;
}

export default CardOfJuicyType;
