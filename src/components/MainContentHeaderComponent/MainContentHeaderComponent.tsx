import { Flex, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

import MainContentHeaderComponentType from '~/types/MainContentHeaderComponentType';

import {
    contentSubscribeStyles,
    contentTitleStyles,
    mainContentHeaderStyles,
} from './MainContentHeaderComponentStyles';

function MainContentHeaderComponent(data: MainContentHeaderComponentType): ReactElement {
    return (
        <Flex sx={mainContentHeaderStyles}>
            <Text sx={contentTitleStyles}>{data.headerName}</Text>
            {data.subscriptions
                ? data.subscriptions.map((reference, index) => (
                      <Text key={`${reference}_${index}`} sx={contentSubscribeStyles}>
                          {reference}
                      </Text>
                  ))
                : null}
        </Flex>
    );
}

export default MainContentHeaderComponent;
