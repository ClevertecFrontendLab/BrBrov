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

import {
    cardBodyHeaderMostJuicyComponentStyles,
    cardBodyMostJuicyComponentStyles,
    cardDescriptionMostJuicyComponentStyles,
    cardFooterMostJuicyComponent,
    cardHeaderMostJuicyComponentStyles,
    cardMostJuicyComponentStyles,
    categoryBadgeMostJuicyComponentStyles,
    imageMostJuicyComponentStyles,
    infoCardMostJuicyComponentStyles,
    ownerMostJuicyComponentStyles,
    prepareBtnMostJuicyComponent,
    prepareIconMostJuicyComponent,
    saveBtnMostJuicyComponent,
    saveIconMostJuicyComponent,
    textOwnerMostJuicyComponentStyles,
    topBadgeMostJuicyComponentStyles,
} from '~/components/MostJuicyCardComponent/MostJuicyCardComponentStyles';
import HeartFlagIcon from '~/custom-icons/HeartFlagIcon';
import CardOfJuicyType from '~/types/CardOfJuicyType';

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
            <Flex sx={infoCardMostJuicyComponentStyles}>
                <CardHeader sx={cardHeaderMostJuicyComponentStyles}>
                    <Badge sx={categoryBadgeMostJuicyComponentStyles}>
                        <IconBadge />
                        {cardData.categoryInfo.category}
                    </Badge>
                    {cardData.likes ? (
                        <Flex gap='8px'>
                            {cardData.likes.hearts ? (
                                <NotificationHeartFlagComponent
                                    countClicks={cardData.likes.hearts}
                                    wrapperStyles={{
                                        width: 'auto',
                                        height: '',
                                        alignItems: 'center',
                                        gap: '6px',
                                    }}
                                />
                            ) : null}
                            {cardData.likes.people ? (
                                <NotificationPeopleComponent
                                    countClicks={cardData.likes.people}
                                    wrapperStyles={{
                                        width: 'auto',
                                        height: '',
                                        alignItems: 'center',
                                        gap: '6px',
                                    }}
                                />
                            ) : null}
                            {cardData.likes.smile ? (
                                <NotificationSmileComponent
                                    countClicks={cardData.likes.smile}
                                    wrapperStyles={{
                                        width: 'auto',
                                        height: '',
                                        alignItems: 'center',
                                        gap: '6px',
                                    }}
                                />
                            ) : null}
                        </Flex>
                    ) : null}
                </CardHeader>
                <CardBody sx={cardBodyMostJuicyComponentStyles}>
                    <Heading sx={cardBodyHeaderMostJuicyComponentStyles} isTruncated>
                        {cardData.name}
                    </Heading>
                    <Text
                        noOfLines={[0, 0, 0, 0, 0, 0, 0, 0, 3]}
                        sx={cardDescriptionMostJuicyComponentStyles}
                    >
                        {cardData.description}
                    </Text>
                </CardBody>
                <CardFooter sx={cardFooterMostJuicyComponent}>
                    <Button sx={saveBtnMostJuicyComponent}>
                        <HeartFlagIcon sx={saveIconMostJuicyComponent} />
                        Сохранить
                    </Button>
                    <Button sx={prepareBtnMostJuicyComponent}>
                        <HeartFlagIcon sx={prepareIconMostJuicyComponent} />
                        Готовить
                    </Button>
                </CardFooter>
            </Flex>
        </Card>
    );
}

export default MostJuicyCardComponent;
