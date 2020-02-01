/* @flow strict */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { NavigationBar, NavigationItem } from './index';

const menuItems = [
  <NavigationItem name="Test 1" />,
  <NavigationItem name="Test 2" />,
  <NavigationItem name="Test 3" />,
  <NavigationItem name="Test 4" />,
];

const accountMenuItem = <button>account</button>;
const logo = <span style={{ color: 'hotpink' }}>LOGO</span>;

storiesOf('NavigationBar', module).add('Default', () => (
  <NavigationBar
    menuItems={menuItems}
    accountMenuItem={accountMenuItem}
    logo={logo}
  />
));
