import { chakra, ChakraComponent } from '@chakra-ui/react';
import { ReactElement } from 'react';

import MainGeneralContentCompnent from '../MainGeneralContent/MainGeneralContentComponent';
import mainComponentStyles from './MainComponentStyles';

const MainChakra: ChakraComponent<'main', object> = chakra('main');

function MainComponent(): ReactElement {
    return (
        <MainChakra sx={mainComponentStyles}>
            <MainGeneralContentCompnent />
        </MainChakra>
    );
}

export default MainComponent;
