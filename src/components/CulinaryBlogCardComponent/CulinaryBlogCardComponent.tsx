import { Avatar, HStack, Text, VStack } from '@chakra-ui/react';
import { ReactElement, useEffect, useState } from 'react';

import CulinaryBlogCardType from '~/types/CulinaryBlogCardType';

import {
    desribtionCulinaryBlogComponentStyles,
    nameCulinaryBlogCardComponentStyles,
    subtitleCulinaryBlogCardComponentStyles,
} from './CulinaryBlogCardComponentStyles';

function CulinaryBlogCardComponent(data: CulinaryBlogCardType): ReactElement {
    const [icon, setIcon] = useState<string | null>(null);

    useEffect(() => {
        if (data.ownerImage)
            import(data.ownerImage).then((loadedeIcon) => setIcon(loadedeIcon.default));
    }, [data.ownerImage]);

    return (
        <VStack
            gap='0'
            sx={{
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '8px',
                background: '#fff',
            }}
        >
            <HStack
                w='100%'
                gap={{ base: '8px', md: '12px' }}
                padding={{ base: '16px 16px 8px 16px', mlg: '24px 24px 16px 24px' }}
            >
                <Avatar
                    name={data.ownerName}
                    src={icon ?? data.ownerName}
                    sx={{
                        w: { base: '32px', md: '48px' },
                        h: { base: '32px', md: '48px' },
                    }}
                />
                <VStack gap='0' alignItems='flex-start'>
                    <Text sx={nameCulinaryBlogCardComponentStyles} noOfLines={[1]}>
                        {data.ownerName}
                    </Text>
                    <Text sx={subtitleCulinaryBlogCardComponentStyles} noOfLines={[1]}>
                        {data.ownerSubtitle}
                    </Text>
                </VStack>
            </HStack>
            <Text sx={desribtionCulinaryBlogComponentStyles} noOfLines={[3]}>
                {data.desribtion}
            </Text>
        </VStack>
    );
}

export default CulinaryBlogCardComponent;
