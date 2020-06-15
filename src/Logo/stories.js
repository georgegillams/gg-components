/* @flow strict */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { Logo } from './index';

storiesOf('Logo', module)
  .add('Default', () => <Logo />)
  .add('Pride', () => <Logo pride />)
  .add('Animated', () => <Logo animated />)
  .add('Without padding', () => <Logo padding={false} />);
