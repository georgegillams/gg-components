/* @flow strict */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { GGRedirect } from './index';

storiesOf('GGRedirect', module)
  .add('Default', () => (
    <GGRedirect
      name="You are now being redirected to our contact page"
      to="/contact"
    />
  ))
  .add('External', () => (
    <GGRedirect
      name="You are now being redirected to Flickr"
      to="https://flickr.com/"
    />
  ));
