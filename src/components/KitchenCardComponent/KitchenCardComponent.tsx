import { Badge, Heading, HStack, IconProps, Text, VStack } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

import KitchenCardType from '~/types/KitchenCardType';

import NotificationHeartFlagComponent from '../NotificationHeartFlagComponent/NotificationHearftFlagComponent';
import NotificationPeopleComponent from '../NotificationPeopleComponent/NoticationPeopleComponent';
import NotificationSmileComponent from '../NotificationSmileComponent/NotificationSmileComponent';
import {
    badgeKitchenCardComponentStyles,
    badgeTextKitchenCardComponentStyles,
    describtionKitchenCardComponentStyles,
    headingKitchenCardComponentStyles,
    notifyTextKitchenCardComponentStyles,
} from './KitchenCardComponentStyles';

function KitchenCardComponent(data: KitchenCardType): ReactElement {
    const IconCategory: FC<IconProps> = data.category?.categoryIcon ?? (() => <></>);
    return (
        <VStack
            gap={{ base: '24px' }}
            padding={{ base: '12px', md: '16px', lg: '24px 24px 20px' }}
            border='1px solid rgba(0, 0, 0, 0.08)'
            borderRadius='8px'
        >
            <VStack alignItems='flex-start'>
                <Heading sx={headingKitchenCardComponentStyles} noOfLines={[1]}>
                    {data.name}
                </Heading>
                <Text sx={describtionKitchenCardComponentStyles} noOfLines={[3]}>
                    {data.description}
                </Text>
            </VStack>
            <HStack w='100%' justifyContent='space-between'>
                {data.category ? (
                    <Badge sx={badgeKitchenCardComponentStyles} gap='8px'>
                        <IconCategory boxSize='16px' />
                        <Text sx={badgeTextKitchenCardComponentStyles}>
                            {data.category.category}
                        </Text>
                    </Badge>
                ) : null}
                {data.likes ? (
                    <HStack alignItems='center'>
                        {data.likes.hearts ? (
                            <NotificationHeartFlagComponent
                                countClicks={data.likes.hearts}
                                wrapperStyles={{ alignItems: 'center', gap: '8px' }}
                                iconStyles={{ w: '12px', h: '12px' }}
                                textStyles={notifyTextKitchenCardComponentStyles}
                            />
                        ) : null}
                        {data.likes.people ? (
                            <NotificationPeopleComponent
                                countClicks={data.likes.people}
                                wrapperStyles={{ alignItems: 'center', gap: '8px' }}
                                iconStyles={{ w: '12px', h: '12px' }}
                                textStyles={notifyTextKitchenCardComponentStyles}
                            />
                        ) : null}
                        {data.likes.smile ? (
                            <NotificationSmileComponent
                                countClicks={data.likes.smile}
                                wrapperStyles={{ alignItems: 'center', gap: '8px' }}
                                iconStyles={{ w: '12px', h: '12px' }}
                                textStyles={notifyTextKitchenCardComponentStyles}
                            />
                        ) : null}
                    </HStack>
                ) : null}
            </HStack>
        </VStack>
    );
}

export default KitchenCardComponent;
