import { Context, createContext } from 'react';

import culinaryBlogs from '~/constants/cullinary-blog/culinaryBlogs';
import CulinaryBlogCardType from '~/types/CulinaryBlogCardType';

const CulinaryBlogs: Context<Array<CulinaryBlogCardType>> = createContext(culinaryBlogs);

export default CulinaryBlogs;
