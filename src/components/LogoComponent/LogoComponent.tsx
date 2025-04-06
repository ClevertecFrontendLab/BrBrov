import { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';

import LogoIcon from '~/custom-icons/LogoIcon';
import LogoTitle from '~/custom-icons/LogoTitile';

import logoStyles from './LogoComponentStyles';

function LogoComponent(): ReactElement {
    return (
        <Flex sx={logoStyles}>
            <LogoIcon />
            <LogoTitle
                display={{
                    base: 'none',
                    sm: 'inline-block',
                }}
            />
        </Flex>
    );
}

export default LogoComponent;
