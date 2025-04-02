import { Avatar, Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

import avatarImage from '~/assets/avatars/Avatar.jpg';

import cardAvatarStyles from './CardAvatarComponentStyles';
import cardBodyStyles from './CardBodyStyles';
import cardHeaderStyles from './CardHeaderStyles';

function CardAvatarComponent(): ReactElement {
    return (
        <Flex sx={cardAvatarStyles}>
            <Avatar h='48px' w='48px' name='Екатерина Константинопольская' src={avatarImage} />
            <Card bg='unset' shadow='unset' borderRadius='unset'>
                <CardHeader sx={cardHeaderStyles}>
                    <Heading as='h3' fontSize='inherit' fontFamily='inherit'>
                        Екатерина Константинопольская
                    </Heading>
                </CardHeader>
                <CardBody sx={cardBodyStyles}>
                    <Text fontFamily='inherit'>@bake_and_pie</Text>
                </CardBody>
            </Card>
        </Flex>
    );
}

export default CardAvatarComponent;
