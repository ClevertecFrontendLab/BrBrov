import { Button, HStack, IconProps, Text } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

import KitchenMenuType from '~/types/KitchenMenuType';

import {
    buttonKitchenMenuItemComponentStyles,
    textKitchenMenuComponentStyles,
} from './KitchenMenuItemComponentStyles';

function KitchenMenuItemComponent(data: KitchenMenuType): ReactElement {
    const IconItem: FC<IconProps> = data.icon;
    return (
        <HStack
            sx={{
                w: '100%',
                h: { base: '50px' },
                padding: { base: '10px 12px', lg: '12px 24px' },
                justifyContent: 'space-between',
                gap: { base: '8px' },
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '8px',
            }}
        >
            <IconItem boxSize={{ base: '24px' }} />
            <Text noOfLines={[1]} sx={textKitchenMenuComponentStyles}>
                {data.name}
            </Text>
            <Button sx={buttonKitchenMenuItemComponentStyles}>Готовить</Button>
        </HStack>
    );
}

export default KitchenMenuItemComponent;
