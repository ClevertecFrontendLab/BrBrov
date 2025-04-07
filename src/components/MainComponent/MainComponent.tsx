import { chakra, ChakraComponent } from '@chakra-ui/react';
import { ReactElement } from 'react';

import mainComponentStyles from './MainComponentStyles';

const MainChakra: ChakraComponent<'main', object> = chakra('main');

function MainComponent(): ReactElement {
    return <MainChakra sx={mainComponentStyles}></MainChakra>;
}

export default MainComponent;
