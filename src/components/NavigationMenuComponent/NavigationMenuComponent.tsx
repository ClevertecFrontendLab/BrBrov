import { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';

import navigationMenuComponentStyles from './NavigationMenuComponentStyles';

function NavigationMenuComponent(): ReactElement {
    return <Flex sx={navigationMenuComponentStyles}></Flex>;
}

export default NavigationMenuComponent;
