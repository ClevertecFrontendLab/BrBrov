import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import { ReactElement, useContext } from 'react';

import FoodCards from '~/context/foodCards/foodCards';
import CarouselCardComponentType from '~/types/CarouselCardComponentType';

import CarouselCardComponent from '../CarouselCardComponent/CarouselCardComponent';
import {
    newRecipeArrowBackStyles,
    newRecipeArrowNextStyles,
    newRecipeBoxStyles,
    newRecipeCarouselStyles,
    newRecipeHeadingStyles,
    newRecipesComponentStyles,
} from './NewRecipesCompnentStyles';

function NewRecipesComponent(): ReactElement {
    const foodCards: Array<CarouselCardComponentType> = useContext(FoodCards);
    return (
        <Flex sx={newRecipesComponentStyles}>
            <Text sx={newRecipeHeadingStyles}>Новые рецепты</Text>
            <Box sx={newRecipeBoxStyles}>
                <IconButton
                    aria-label='swipe back'
                    icon={<ArrowBackIcon w='24px' h='24px' bg='#000' color='#ffffd3' />}
                    sx={newRecipeArrowBackStyles}
                />
                <HStack sx={newRecipeCarouselStyles}>
                    {foodCards.map((card: CarouselCardComponentType, index: number) => (
                        <CarouselCardComponent key={`${card.heading}_${index}`} {...card} />
                    ))}
                </HStack>
                <IconButton
                    aria-label='swipe next'
                    icon={<ArrowForwardIcon w='24px' h='24px' bg='#000' color='#ffffd3' />}
                    sx={newRecipeArrowNextStyles}
                />
            </Box>
        </Flex>
    );
}

export default NewRecipesComponent;
