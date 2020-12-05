import React from 'react';

import { Paragraph } from '../Paragraph';

import { SkipLink } from './index';

export default { title: 'Skip link', component: SkipLink };

export const Default = () => (
  <>
    <SkipLink label="Skip to main content" href="#main" />
    <Paragraph>
      Note that this content is not visible until you tab to it!
    </Paragraph>
  </>
);
