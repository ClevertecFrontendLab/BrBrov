import CategoryInfoTypes from './CategoryInfoTypes';
import LikesInfoTypes from './LikesInfoType';

interface CarouselCardComponentType extends CategoryInfoTypes {
    img: string;
    heading: string;
    description: string;

    likes?: LikesInfoTypes;
}

export default CarouselCardComponentType;
