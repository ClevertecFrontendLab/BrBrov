import CategoryInfoTypes from './CategoryInfoTypes';
import LikesInfoTypes from './LikesInfoType';

interface KitchenCardType {
    name: string;
    description: string;
    category?: CategoryInfoTypes;
    likes?: LikesInfoTypes;
}

export default KitchenCardType;
