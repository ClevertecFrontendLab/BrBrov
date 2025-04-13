import { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';

import MostJuicyComponent from '~/components/MostJuisyComponent/MostJuicyComponent';
import allergens from '~/constants/allergens/allergens';
import culinaryBlogs from '~/constants/cullinary-blog/culinaryBlogs';
import carouselData from '~/constants/foods/carouselData';
import mostJuicy from '~/constants/most-juicy/mostJuicy';
import AllergensContext from '~/context/allergens/allergensContex';
import CulinaryBlogs from '~/context/culinary-blog/culinaryBlogContext';
import FoodCards from '~/context/foodCards/foodCards';
import MostJuicy from '~/context/most-juicy/mostJuicyContext';

import CulinaryBlogComponent from '../CulinaryBlogsComponent/CulinaryBogsComponent';
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
            <MostJuicy.Provider value={mostJuicy}>
                <MostJuicyComponent />
            </MostJuicy.Provider>
            <CulinaryBlogs.Provider value={culinaryBlogs}>
                <CulinaryBlogComponent />
            </CulinaryBlogs.Provider>
        </Flex>
    );
}

export default MainGeneralContentCompnent;
