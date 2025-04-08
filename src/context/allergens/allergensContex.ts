import { Context, createContext } from 'react';

import allergens from '~/constants/allergens/allergens';
import AllergenType from '~/types/AllergenType';

const AllergensContext: Context<AllergenType[]> = createContext(allergens);

export default AllergensContext;
