import { IconButton } from '@chakra-ui/react';
import { ReactElement } from 'react';

import BurgerIcon from '~/custom-icons/BurgerIcon';

import burgerButtonStyles from './BurgerButtonComponentStyles';

function BurgerButton(): ReactElement {
    return <IconButton icon={<BurgerIcon />} aria-label='Menu' sx={burgerButtonStyles} />;
}

export default BurgerButton;
