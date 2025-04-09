import { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';

import allergens from '~/constants/allergens/allergens';
import carouselData from '~/constants/foods/carouselData';
import AllergensContext from '~/context/allergens/allergensContex';
import FoodCards from '~/context/foodCards/foodCards';

import MainContentHeaderComponent from '../MainContentHeaderComponent/MainContentHeaderComponent';
import NewRecipesComponent from '../NewRecipesComponent/NewRecipesComponent';
import SearchingContentComponent from '../SearchingContentComponent/SearchingContentComponent';
import mainGeneralContentComponentStyles from './MainGeneralContentComponentStyles';

function MainGeneralContentCompnent(): ReactElement {
    return (
        <Flex sx={mainGeneralContentComponentStyles}>
            <MainContentHeaderComponent headerName='Приятного аппетита!' />
            <AllergensContext.Provider value={allergens}>
                <SearchingContentComponent />
            </AllergensContext.Provider>
            <FoodCards.Provider value={carouselData}>
                <NewRecipesComponent />
            </FoodCards.Provider>
        </Flex>
    );
}

export default MainGeneralContentCompnent;
