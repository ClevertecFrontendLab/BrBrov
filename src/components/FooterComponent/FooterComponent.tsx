import { chakra, ChakraComponent } from '@chakra-ui/react';
import { ReactElement } from 'react';

import footerComponentStyles from './FooterComponentStyles';

const FooterChakra: ChakraComponent<'footer', object> = chakra('footer');

function FooterComponent(): ReactElement {
    return <FooterChakra sx={footerComponentStyles}></FooterChakra>;
}

export default FooterComponent;
