import {
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Switch,
} from '@chakra-ui/react';
import { ReactElement, useContext } from 'react';

import AllergensContext from '~/context/allergens/allergensContex';
import LoupeIcon from '~/custom-icons/LoupeIcon';
import VariantSearchIcon from '~/custom-icons/VariantSearchIcon';
import AllergenType from '~/types/AllergenType';

import SearchingSelectComponent from '../SearchingSelectComponent/SearchingSelectComponent';
import {
    searchingContentAllergenStyles,
    searchingContentBottomStyles,
    searchingContentComponentStyles,
    searchingContentInput,
    searchingContentTopStyles,
    serchingButtonContentStyles,
} from './SearchingContentComponentStyles';

function SearchingContentComponent(): ReactElement {
    const allergens: AllergenType[] = useContext(AllergensContext);
    return (
        <FormControl sx={searchingContentComponentStyles}>
            <Flex sx={searchingContentTopStyles}>
                <IconButton
                    aria-label='Show search request'
                    icon={<VariantSearchIcon boxSize={{ base: '30px', md: '46px' }} />}
                    sx={serchingButtonContentStyles}
                />
                <InputGroup>
                    <Input placeholder='Название или ингредиент...' sx={searchingContentInput} />
                    <InputRightElement
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        w={{ base: '32px', md: '48px' }}
                        h='100%'
                    >
                        <LoupeIcon boxSize={{ base: '14px', md: '18px' }} />
                    </InputRightElement>
                </InputGroup>
            </Flex>
            <Flex sx={searchingContentBottomStyles}>
                <FormLabel htmlFor='disableAllergens' sx={searchingContentAllergenStyles}>
                    Исключить мои аллергены
                </FormLabel>
                <Switch id='disableAllerggens' />
                <SearchingSelectComponent allergens={allergens} />
            </Flex>
        </FormControl>
    );
}

export default SearchingContentComponent;
