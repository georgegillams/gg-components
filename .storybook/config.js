/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2018 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { addParameters } from '@storybook/react'; // <- or your storybook framework

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(story => (
  <BrowserRouter>
    <Route
      path="/"
      component={() => {
        return story();
      }}
    />
  </BrowserRouter>
));

addParameters({
  backgrounds: [
    { name: 'Dark', value: '#000000' },
    { name: 'Skyscanner', value: '#0770E3' },
    { name: 'Orange', value: '#ffbb00' },
  ],
});

/* eslint-disable global-require */
configure(() => {
  require('../src/Auth/stories.js');
  require('../src/Button/stories.js');
  require('../src/Cards/stories.js');
  require('../src/Checkbox/stories.js');
  require('../src/Code/stories.js');
  require('../src/CreativeCommons/stories.js');
  require('../src/Degree/stories.js');
  require('../src/Design/stories.js');
  require('../src/Footer/stories.js');
  require('../src/FormBuilder/stories.js');
  require('../src/InfoCell/stories.js');
  require('../src/Input/stories.js');
  require('../src/LoadingIndicator/stories.js');
  require('../src/Logo/stories.js');
  require('../src/MoneyPot/stories.js');
  require('../src/NavigationBar/stories.js');
  require('../src/Notifications/stories.js');
  require('../src/Progress/stories.js');
  require('../src/Redirect/stories.js');
  require('../src/RequestStatus/stories.js');
  require('../src/ScrollContainer/stories.js');
  require('../src/SegmentedControl/stories.js');
  require('../src/Skeletons/stories.js');
  require('../src/Tag/stories.js');
  require('../src/TimzoneSafeCountdown/stories.js');
  require('../src/Typography/stories.js');
}, module);
/* eslint-enable */
