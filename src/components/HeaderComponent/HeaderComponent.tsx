import { chakra, ChakraComponent } from '@chakra-ui/react';
import { ReactElement } from 'react';

import LogoComponent from '../LogoComponent/LogoComponent';
import headerStyles from './HeaderComponentStyles';

const HeaderChakra: ChakraComponent<'header', object> = chakra('header');

function HeaderComponent(): ReactElement {
    return (
        <HeaderChakra sx={headerStyles}>
            <LogoComponent />
        </HeaderChakra>
    );
}

export default HeaderComponent;
