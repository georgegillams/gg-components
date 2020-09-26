import React from 'react';

import { ArticleDate } from './index';

export default { title: 'Article date', component: ArticleDate };

export const Default = () => (
  <ArticleDate date={new Date(2019, 4, 5, 10, 11, 12)} />
);
