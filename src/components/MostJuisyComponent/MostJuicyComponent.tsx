import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, HStack } from '@chakra-ui/react';
import { ReactElement } from 'react';

function MostJuicyComponent(): ReactElement {
    return (
        <Flex>
            <HStack>
                <Heading>Самое сочное</Heading>
                <Button>
                    Вся подборка
                    <ArrowForwardIcon />
                </Button>
            </HStack>
            <Flex></Flex>
        </Flex>
    );
}

export default MostJuicyComponent;
