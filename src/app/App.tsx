import { Box } from '@chakra-ui/react';

import HeaderComponent from '~/components/HeaderComponent/HeaderComponent';

import appStyles from './AppStyles';

//import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    return (
        <>
            <Box sx={appStyles}>
                <HeaderComponent></HeaderComponent>
            </Box>
        </>
    );
}

export default App;
