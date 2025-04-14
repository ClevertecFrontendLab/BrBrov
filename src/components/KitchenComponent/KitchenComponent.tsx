import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { ReactElement, useContext } from 'react';

import VeganContext from '~/context/vegan-data/veganContext';
import KitchenCardType from '~/types/KitchenCardType';
import KitchenDataType from '~/types/KitchenDataType';
import KitchenMenuType from '~/types/KitchenMenuType';

import KitchenCardComponent from '../KitchenCardComponent/KitchenCardComponent';
import KitchenMenuItemComponent from '../KitchenMenuItemComponent/KitchenMenuItemComponent';
import { headingKitchenComponentStyles } from './KitchenComponentStyles';

function KitchenComponent(): ReactElement {
    const veganData: KitchenDataType = useContext(VeganContext);
    return (
        <VStack
            gap={{ base: '16px', md: '24px' }}
            marginTop={{ base: '32px', md: '40px' }}
            marginLeft={{ base: '0', lg: '24px' }}
            paddingTop={{ base: '8px', md: '24px' }}
            borderTop='1px solid rgba(0, 0, 0, 0.08)'
        >
            <Flex
                flexDirection={{ base: 'column', md: 'row' }}
                gap={{ base: '12px', md: '16%', lg: '25%' }}
            >
                <Heading sx={headingKitchenComponentStyles}>{veganData.name}</Heading>
                <Text>{veganData.description}</Text>
            </Flex>
            <Flex
                flexDirection={{ base: 'column', sm: 'row' }}
                gap={{ base: '12px', md: '16px', lg: '24px' }}
            >
                {veganData.cards.map((card: KitchenCardType, i: number) => (
                    <KitchenCardComponent key={`${card.description}_${i}`} {...card} />
                ))}
                <VStack>
                    {veganData.menu.map((item: KitchenMenuType, i: number) => (
                        <KitchenMenuItemComponent key={`${item.name}_${i}`} {...item} />
                    ))}
                </VStack>
            </Flex>
        </VStack>
    );
}

export default KitchenComponent;
