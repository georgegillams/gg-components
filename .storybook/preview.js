import React from 'react';

import { addDecorator, addParameters } from '@storybook/react';

addDecorator(storyFn => {
  return <div style={{ fontFamily: 'Quattrocento sans' }}>{storyFn()}</div>;
});

addParameters({
  backgrounds: [
    { name: 'Dark', value: '#000000' },
    { name: 'Skyscanner', value: '#0770E3' },
    { name: 'Orange', value: '#ffbb00' },
  ],
});
