import { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';

import allergens from '~/constants/allergens/allergens';
import AllergensContext from '~/context/allergens/allergensContex';

import MainContentHeaderComponent from '../MainContentHeaderComponent/MainContentHeaderComponent';
import SearchingContentComponent from '../SearchingContentComponent/SearchingContentComponent';
import mainGeneralContentComponentStyles from './MainGeneralContentComponentStyles';

function MainGeneralContentCompnent(): ReactElement {
    return (
        <Flex sx={mainGeneralContentComponentStyles}>
            <MainContentHeaderComponent headerName='Приятного аппетита!' />
            <AllergensContext.Provider value={allergens}>
                <SearchingContentComponent />
            </AllergensContext.Provider>
        </Flex>
    );
}

export default MainGeneralContentCompnent;
