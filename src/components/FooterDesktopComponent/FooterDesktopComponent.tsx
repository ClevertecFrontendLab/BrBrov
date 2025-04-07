import { Flex, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

import SignOutIcon from '~/custom-icons/SignOutIcon';

import {
    footerBottomTextStyles,
    footerDesktopComponentStyles,
    footerMiddleTextStyles,
    footerTopTextStyles,
    signOutStyles,
} from './FooterDesktopComponentStyles';

function FooterDesktopComponent(): ReactElement {
    return (
        <Flex sx={footerDesktopComponentStyles}>
            <Text sx={footerTopTextStyles}>Версия программы 03.25</Text>
            <Text sx={footerMiddleTextStyles}>
                Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
            </Text>
            <Flex sx={signOutStyles}>
                <SignOutIcon />
                <Text sx={footerBottomTextStyles}>Выйти</Text>
            </Flex>
        </Flex>
    );
}

export default FooterDesktopComponent;
