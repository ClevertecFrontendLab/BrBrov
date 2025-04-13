import { Flex, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

import WriteRecipeIcon from '~/custom-icons/WirteRecipeIcon';

import { recordRecipeComponentStyles, textRecordRecipeStyles } from './RecordRecipeComponentStyles';

function RecordRecipeComponent(): ReactElement {
    return (
        <Flex sx={recordRecipeComponentStyles}>
            <WriteRecipeIcon />
            <Text sx={textRecordRecipeStyles}>Записать рецепт</Text>
        </Flex>
    );
}

export default RecordRecipeComponent;
