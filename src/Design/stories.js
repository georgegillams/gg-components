/* @flow strict */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ColourPalletteItem } from './index';

storiesOf('Design', module).add('ColourPalletteItem', () => (
  <ColourPalletteItem colourName="Red" colour="red" />
));
