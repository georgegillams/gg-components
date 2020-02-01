/* @flow strict */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ColourPalleteItem } from './index';

storiesOf('Design', module).add('ColourPalleteItem', () => (
  <ColourPalleteItem colourName="Red" colour="red" />
));
