import React from 'react';

export const decorators = [
  Story => (
    <div style={{ fontFamily: 'Quattrocento Sans' }}>
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
