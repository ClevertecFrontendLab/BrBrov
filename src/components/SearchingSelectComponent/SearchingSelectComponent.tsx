import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Button, Checkbox, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

import GreenPlusIcon from '~/custom-icons/GreenPlusIcon';
import SearchingSelectType from '~/types/SearchingSelectType';

import {
    searchingAddItemStyles,
    searchingAddItemTextStyles,
    searchingItemStyles,
    searchingSelectComponentStyles,
    serachingItemTextStyles,
} from './SearchingSelectComponentStyles';

function SearchingSelectComponent(data: SearchingSelectType): ReactElement {
    return (
        <Menu>
            {({ isOpen }) => (
                <>
                    <MenuButton
                        sx={searchingSelectComponentStyles}
                        isActive={isOpen}
                        as={Button}
                        rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    >
                        Выберите из списка...
                    </MenuButton>
                    <MenuList sx={{ maxW: '234px' }}>
                        {data.allergens
                            ? data.allergens.map((allergen, index) => (
                                  <MenuItem
                                      key={`${allergen.value}_${index}`}
                                      sx={searchingItemStyles}
                                  >
                                      <Checkbox sx={serachingItemTextStyles}>
                                          {allergen.name}
                                      </Checkbox>
                                  </MenuItem>
                              ))
                            : null}
                        <MenuItem sx={searchingAddItemStyles}>
                            <Text sx={searchingAddItemTextStyles}>Другой аллерген</Text>
                            <GreenPlusIcon />
                        </MenuItem>
                    </MenuList>
                </>
            )}
        </Menu>
    );
}

export default SearchingSelectComponent;
