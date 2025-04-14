import { Context, createContext } from 'react';

import veganData from '~/constants/kitchen-data/veganData';
import KitchenDataType from '~/types/KitchenDataType';

const VeganContext: Context<KitchenDataType> = createContext<KitchenDataType>(veganData);

export default VeganContext;
