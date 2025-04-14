import { Avatar, Center, Flex, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

import LoupeIcon from '~/custom-icons/LoupeIcon';
import WriteRecipeIcon from '~/custom-icons/WirteRecipeIcon';
import WriteIcon from '~/custom-icons/WriteIcon';

import avatar from '../../assets/avatars/Avatar.jpg';
import {
    firstTextFooterMobileComponentStyles,
    footerMobileComponentStyles,
    itemFooterMobileComponentStyles,
    textFooterMobileComponentStyles,
} from './FooterMobileComponentStyles';

function FooterMobileComponent(): ReactElement {
    return (
        <Flex sx={footerMobileComponentStyles}>
            <Center sx={itemFooterMobileComponentStyles}>
                <WriteRecipeIcon boxSize='40px' />
                <Text sx={firstTextFooterMobileComponentStyles}>Главная</Text>
            </Center>
            <Center sx={itemFooterMobileComponentStyles}>
                <Center boxSize='40px'>
                    <LoupeIcon />
                </Center>
                <Text sx={textFooterMobileComponentStyles}>Поиск</Text>
            </Center>
            <Center sx={itemFooterMobileComponentStyles}>
                <Center boxSize='40px'>
                    <WriteIcon />
                </Center>
                <Text sx={textFooterMobileComponentStyles}>Записать</Text>
            </Center>
            <Center sx={itemFooterMobileComponentStyles}>
                <Avatar src={avatar} boxSize='40px' />
                <Text sx={textFooterMobileComponentStyles}>Мой профиль</Text>
            </Center>
        </Flex>
    );
}

export default FooterMobileComponent;
