/* @flow strict */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { CreativeCommons } from './index';

storiesOf('Creative commons', module)
  .add('Default', () => <CreativeCommons />)
  .add('Centered', () => <CreativeCommons style={{ textAlign: 'center' }} />);
