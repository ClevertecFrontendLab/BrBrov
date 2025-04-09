import { createContext } from 'react';

import carouselData from '~/constants/foods/carouselData';

const FoodCards = createContext(carouselData);

export default FoodCards;
