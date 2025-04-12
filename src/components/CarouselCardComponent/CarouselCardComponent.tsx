import {
    Badge,
    Box,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Image,
    Spacer,
    Text,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

import CarouselCardComponentType from '../../types/CarouselCardComponentType';
import NotificationHeartFlagComponent from '../NotificationHeartFlagComponent/NotificationHearftFlagComponent';
import NotificationPeopleComponent from '../NotificationPeopleComponent/NoticationPeopleComponent';
import NotificationSmileComponent from '../NotificationSmileComponent/NotificationSmileComponent';
import {
    carouselCardBadgeStyles,
    carouselCardBadgeTopStyles,
    carouselCardBodyStyles,
    carouselCardComponentStyles,
    carouselCardHeadingStyles,
    carouselCardImageStyles,
    carouselCardNotifyStyle,
    carouselCardStyles,
    carouselCardSubscriptionStyles,
    carouselCardSubscriptionTextStyles,
} from './CarouselCardComponentStyles';

function CarouselCardComponent(cardData: CarouselCardComponentType): ReactElement {
    const IconBadge = cardData.categoryIcon;
    return (
        <Box sx={carouselCardComponentStyles}>
            <Flex sx={carouselCardStyles}>
                <Badge sx={carouselCardBadgeTopStyles}>
                    <IconBadge h='16px' w='16px' />
                    {cardData.category}
                </Badge>
                <Image src={cardData.img} alt={cardData.heading} sx={carouselCardImageStyles} />
                <Card sx={carouselCardBodyStyles}>
                    <CardBody sx={carouselCardSubscriptionStyles}>
                        <Heading noOfLines={[2, 2, 2, 1]} sx={carouselCardHeadingStyles}>
                            {cardData.heading}
                        </Heading>
                        <Text isTruncated noOfLines={3} sx={carouselCardSubscriptionTextStyles}>
                            {cardData.description}
                        </Text>
                    </CardBody>
                    <CardFooter sx={carouselCardNotifyStyle}>
                        <Badge sx={carouselCardBadgeStyles}>
                            <IconBadge h='16px' w='16px' />
                            {cardData.category}
                        </Badge>
                        {cardData.likes ? (
                            <Flex gap='8px'>
                                {cardData.likes.hearts ? (
                                    <NotificationHeartFlagComponent
                                        countClicks={cardData.likes.hearts}
                                        wrapperStyles={{
                                            h: '24px',
                                            gap: '8px',
                                            alignItems: 'center',
                                        }}
                                        iconStyles={{ h: '12px', w: '12px' }}
                                    />
                                ) : null}
                                {cardData.likes.people ? (
                                    <NotificationPeopleComponent
                                        countClicks={cardData.likes.people}
                                        wrapperStyles={{
                                            h: '24px',
                                            gap: '8px',
                                            alignItems: 'center',
                                        }}
                                        iconStyles={{ h: '12px', w: '12px' }}
                                    />
                                ) : null}
                                {cardData.likes.smile ? (
                                    <NotificationSmileComponent
                                        countClicks={cardData.likes.smile}
                                        wrapperStyles={{
                                            h: '24px',
                                            gap: '8px',
                                            alignItems: 'center',
                                        }}
                                        iconStyles={{ h: '12px', w: '12px' }}
                                    />
                                ) : null}
                            </Flex>
                        ) : (
                            <Spacer />
                        )}
                    </CardFooter>
                </Card>
            </Flex>
        </Box>
    );
}

export default CarouselCardComponent;
