import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ReactElement } from 'react';

import breadCrumpStyles from './BreadCrumpComponentStyles';

function BreadcrumbComponent(): ReactElement {
    //TODO: must add router
    return (
        <Breadcrumb sx={{ display: { base: 'none', xl: 'block', lg: 'block' } }}>
            <BreadcrumbItem isCurrentPage sx={breadCrumpStyles}>
                <BreadcrumbLink>Главная</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
}

export default BreadcrumbComponent;
