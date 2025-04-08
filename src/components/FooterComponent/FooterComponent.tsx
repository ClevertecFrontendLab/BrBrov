import { chakra, ChakraComponent } from '@chakra-ui/react';
import { ReactElement } from 'react';

import FooterDesktopComponent from '../FooterDesktopComponent/FooterDesktopComponent';
import RecordRecipeComponent from '../RecordRecipeComponent/RecordecipeComponent';
import footerComponentStyles from './FooterComponentStyles';

const FooterChakra: ChakraComponent<'footer', object> = chakra('footer');

function FooterComponent(): ReactElement {
    return (
        <FooterChakra sx={footerComponentStyles}>
            <FooterDesktopComponent />
            <RecordRecipeComponent />
        </FooterChakra>
    );
}

export default FooterComponent;
