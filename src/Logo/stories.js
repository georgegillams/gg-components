/* @flow strict */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Logo } from './index';

storiesOf('Logo', module)
  .add('Default', () => <Logo />)
  .add('Light', () => <Logo light />)
  .add('Small', () => <Logo small />)
  .add('Small light', () => <Logo small light />)
  .add('Small animated', () => <Logo small animated />)
  .add('Small without padding', () => <Logo small padding={false} />);
