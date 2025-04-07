import { Box } from '@chakra-ui/react';

import FooterComponent from '~/components/FooterComponent/FooterComponent';
import HeaderComponent from '~/components/HeaderComponent/HeaderComponent';
import MainComponent from '~/components/MainComponent/MainComponent';

import appStyles from './AppStyles';

//import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    return (
        <>
            <Box sx={appStyles}>
                <HeaderComponent></HeaderComponent>
                <MainComponent></MainComponent>
                <FooterComponent></FooterComponent>
            </Box>
        </>
    );
}

export default App;
