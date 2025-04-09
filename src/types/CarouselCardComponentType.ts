interface CarouselCardComponentType {
    img: string;
    heading: string;
    description: string;
    categoryIcon: React.FC;
    category: string;
    likes?: {
        hearts?: string;
        people?: string;
        smile?: string;
    };
}

export default CarouselCardComponentType;
