import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, HStack } from '@chakra-ui/react';
import { ReactElement, useContext } from 'react';

import CulinaryBlogs from '~/context/culinary-blog/culinaryBlogContext';
import CulinaryBlogCardType from '~/types/CulinaryBlogCardType';

import CulinaryBlogCardComponent from '../CulinaryBlogCardComponent/CulinaryBlogCardComponent';
import {
    buttonBottomCulinaryBlogsStyles,
    buttonTopCulinaryBlogsStyles,
    containerCulinaryBlogComponentStyles,
    culinaryBlogsComponentStyles,
    headingCulinaryBlogsComponentStyles,
} from './CulinaryBlogComponentStyles';

function CulinaryBlogComponent(): ReactElement {
    const culinaryBlogs: Array<CulinaryBlogCardType> = useContext(CulinaryBlogs);
    return (
        <Flex sx={culinaryBlogsComponentStyles}>
            <HStack justifyContent='space-between'>
                <Heading sx={headingCulinaryBlogsComponentStyles}>Кулинарные блоги</Heading>
                <Button sx={buttonTopCulinaryBlogsStyles}>
                    Все авторы
                    <ArrowForwardIcon boxSize='16px' />
                </Button>
            </HStack>
            <Flex sx={containerCulinaryBlogComponentStyles}>
                {culinaryBlogs.map((card: CulinaryBlogCardType, index: number) => (
                    <CulinaryBlogCardComponent key={`${card.ownerName}_${index}`} {...card} />
                ))}
            </Flex>
            <Button sx={buttonBottomCulinaryBlogsStyles}>
                Все авторы
                <ArrowForwardIcon boxSize='16px' />
            </Button>
        </Flex>
    );
}

export default CulinaryBlogComponent;
