import { IconProps } from '@chakra-ui/react';

interface CarouselCardComponentType {
    img: string;
    heading: string;
    description: string;
    categoryIcon: React.FC<IconProps>;
    category: string;
    likes?: {
        hearts?: string;
        people?: string;
        smile?: string;
    };
}

export default CarouselCardComponentType;
