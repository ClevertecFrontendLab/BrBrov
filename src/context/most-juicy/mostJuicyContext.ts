import { Context, createContext } from 'react';

import mostJuicy from '~/constants/most-juicy/mostJuicy';
import CardOfJuicyType from '~/types/CardOfJuicyType';

const MostJuicy: Context<Array<CardOfJuicyType>> = createContext(mostJuicy);

export default MostJuicy;
