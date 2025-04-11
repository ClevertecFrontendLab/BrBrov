import {
    Avatar,
    Badge,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    IconProps,
    Image,
    Text,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

import WriteRecipeIcon from '~/custom-icons/WirteRecipeIcon';
import CardOfJuicyType from '~/types/CardOfJuicyType';

import {
    cardMostJuicyComponentStyles,
    imageMostJuicyComponentStyles,
    ownerMostJuicyComponentStyles,
    textOwnerMostJuicyComponentStyles,
    topBadgeMostJuicyComponentStyles,
} from '../MostJuisyComponent/MostJuicyComponentStyles';
import NotificationHeartFlagComponent from '../NotificationHeartFlagComponent/NotificationHearftFlagComponent';
import NotificationPeopleComponent from '../NotificationPeopleComponent/NoticationPeopleComponent';
import NotificationSmileComponent from '../NotificationSmileComponent/NotificationSmileComponent';

function MostJuicyCardComponent(cardData: CardOfJuicyType): ReactElement {
    const IconBadge: React.FC<IconProps> = cardData.categoryInfo.categoryIcon;
    return (
        <Card sx={cardMostJuicyComponentStyles}>
            {cardData.owner ? (
                <Flex sx={ownerMostJuicyComponentStyles}>
                    <Avatar
                        name={cardData.owner?.nickName}
                        src={cardData.owner?.avatar}
                        sx={{ w: '16px', h: '16px' }}
                    />
                    <Text sx={textOwnerMostJuicyComponentStyles}>
                        {cardData.owner.nickName + ' '}рекомендует
                    </Text>
                </Flex>
            ) : null}
            <Badge sx={topBadgeMostJuicyComponentStyles}>
                <IconBadge sx={{ h: '16px', w: '16px' }} />
                {cardData.categoryInfo.category}
            </Badge>
            <Image src={cardData.img} alt='Food foto' sx={imageMostJuicyComponentStyles} />
            <Flex>
                <CardHeader>
                    <Badge>
                        <IconBadge />
                        {cardData.categoryInfo.category}
                    </Badge>
                    {cardData.likes ? (
                        <Flex>
                            {cardData.likes.hearts ? (
                                <NotificationHeartFlagComponent
                                    countClicks={cardData.likes.hearts}
                                />
                            ) : null}
                            {cardData.likes.people ? (
                                <NotificationPeopleComponent countClicks={cardData.likes.people} />
                            ) : null}
                            {cardData.likes.smile ? (
                                <NotificationSmileComponent countClicks={cardData.likes.smile} />
                            ) : null}
                        </Flex>
                    ) : null}
                </CardHeader>
                <CardBody>
                    <Heading>{cardData.name}</Heading>
                    <Text>{cardData.description}</Text>
                </CardBody>
                <CardFooter>
                    <Button>
                        <WriteRecipeIcon />
                        Сохранить
                    </Button>
                    <Button>Готовить</Button>
                </CardFooter>
            </Flex>
        </Card>
    );
}

export default MostJuicyCardComponent;
