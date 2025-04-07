import { Context } from 'react';
import { createContext } from 'react';

import menuList from '~/constants/menuList';
import MenuListType from '~/types/MenuListType';

const menuContext: Context<MenuListType> = createContext(menuList);

export default menuContext;
