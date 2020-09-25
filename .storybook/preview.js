import React from 'react';

import STYLES from './global-styles.scss';
import { cssModules } from '../src/helpers/cssModules';

const getClassName = cssModules(STYLES);

export const decorators = [
  Story => (
    <div className={getClassName('global-wrapper')}>
      <Story />
    </div>
  ),
];

export const parameters = {
  backgrounds: {
    values: [
      { name: 'Dark', value: '#000000' },
      { name: 'Skyscanner', value: '#0770E3' },
      { name: 'Orange', value: '#ffbb00' },
    ],
  },
};
