import React from 'react';

import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { addParameters } from '@storybook/react'; // <- or your storybook framework

addDecorator(withA11y);
addDecorator(withKnobs);
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

/* eslint-disable global-require */
configure(() => {
  require('../src/APIEntity/stories.js');
  require('../src/AnimatedContent/stories.js');
  require('../src/ArticleCard/stories.js');
  require('../src/ArticleDate/stories.js');
  require('../src/BurgerButton/stories.js');
  require('../src/Button/stories.js');
  require('../src/Card/stories.js');
  require('../src/Checkbox/stories.js');
  require('../src/Code/stories.js');
  require('../src/CopyButton/stories.js');
  require('../src/DebugObject/stories.js');
  require('../src/Degree/stories.js');
  require('../src/Design/stories.js');
  require('../src/FormBuilder/stories.js');
  require('../src/Image/stories.js');
  require('../src/InfoCell/stories.js');
  require('../src/Input/stories.js');
  require('../src/LoadingCover/stories.js');
  require('../src/LoadingIndicator/stories.js');
  require('../src/MoneyPot/stories.js');
  require('../src/NavigationBar/stories.js');
  require('../src/ObjectAsList/stories.js');
  require('../src/PageTitle/stories.js');
  require('../src/Paragraph/stories.js');
  require('../src/Progress/stories.js');
  require('../src/Quote/stories.js');
  require('../src/Redirect/stories.js');
  require('../src/RequestStatus/stories.js');
  require('../src/ScrollContainer/stories.js');
  require('../src/Section/stories.js');
  require('../src/SegmentedControl/stories.js');
  require('../src/Select/stories.js');
  require('../src/Skeletons/stories.js');
  require('../src/Subsection/stories.js');
  require('../src/Tag/stories.js');
  require('../src/TagFilter/stories.js');
  require('../src/TextArea/stories.js');
  require('../src/TextLink/stories.js');
  require('../src/TimezoneSafeCountdown/stories.js');
}, module);
/* eslint-enable */
