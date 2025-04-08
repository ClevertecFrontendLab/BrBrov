import { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';

import MainContentHeaderComponent from '../MainContentHeaderComponent/MainContentHeaderComponent';
import mainGeneralContentComponentStyles from './MainGeneralContentComponentStyles';

function MainGeneralContentCompnent(): ReactElement {
    return (
        <Flex sx={mainGeneralContentComponentStyles}>
            <MainContentHeaderComponent headerName='Приятного аппетита!' />
        </Flex>
    );
}

export default MainGeneralContentCompnent;
