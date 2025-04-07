import { Box, Flex, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

import SubMenuItemType from '~/types/SubMenuType';

import { subMenuComponentStyles, subMenuTextStyles, unmarkedStyle } from './SubMenuComponentStyles';

function SubMenuComponent(subMenu: SubMenuItemType): ReactElement {
    return (
        <Flex sx={subMenuComponentStyles}>
            <Box sx={unmarkedStyle} />
            <Text sx={subMenuTextStyles}>{subMenu.name}</Text>
        </Flex>
    );
}

export default SubMenuComponent;
