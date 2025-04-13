import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Center, Flex, Heading, HStack } from '@chakra-ui/react';
import { ReactElement, useContext } from 'react';

import MostJuicyCardComponent from '~/components/MostJuicyCardComponent/MostJuicyCardComponent';
import {
    buttonBottomJuicyComponentStyles,
    buttonTopJuicyComponentStyles,
    containerJuicyComponentStyles,
    mostJuicyComponentStyles,
    titleJuicyComponentStyles,
} from '~/components/MostJuisyComponent/MostJuicyComponentStyles';
import MostJuicy from '~/context/most-juicy/mostJuicyContext';
import CardOfJuicyType from '~/types/CardOfJuicyType';

function MostJuicyComponent(): ReactElement {
    const mostJuicyArray: Array<CardOfJuicyType> = useContext(MostJuicy);
    return (
        <Flex sx={mostJuicyComponentStyles}>
            <HStack justifyContent='space-between'>
                <Heading sx={titleJuicyComponentStyles}>Самое сочное</Heading>
                <Button sx={buttonTopJuicyComponentStyles}>
                    Вся подборка
                    <ArrowForwardIcon w='16px' h='16px' />
                </Button>
            </HStack>
            <Flex sx={containerJuicyComponentStyles}>
                {mostJuicyArray.map((card: CardOfJuicyType, index: number) => (
                    <MostJuicyCardComponent key={`${card.description}_${index}`} {...card} />
                ))}
            </Flex>
            <Center>
                <Button sx={buttonBottomJuicyComponentStyles}>
                    Вся подборка
                    <ArrowForwardIcon w='16px' h='16px' />
                </Button>
            </Center>
        </Flex>
    );
}

export default MostJuicyComponent;
