/* @flow strict */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { Section } from '../Typography';

import backgroundImage from './backgroundImage.png';

import { Card } from './index';

storiesOf('Card', module)
  .add('Default', () => (
    <Card linkUrl="/test">
      <Section noPadding name="Test" />
    </Card>
  ))
  .add('Highlighted', () => (
    <Card highlighted linkUrl="/test">
      <Section noPadding name="Test" />
    </Card>
  ))
  .add('Unpadded', () => (
    <Card padded={false} linkUrl="/test">
      <Section noPadding name="Test" />
    </Card>
  ))
  .add('With fill image', () => (
    <Card fillImageSrc={backgroundImage} linkUrl="/test">
      <Section noPadding name="Test" />
    </Card>
  ))
  .add('With banner colour', () => (
    <Card linkUrl="/test" bannerColor="red">
      <Section noPadding name="Test" />
    </Card>
  ))
  .add('Light', () => (
    <Card linkUrl="/test" light>
      <Section noPadding name="Test" />
    </Card>
  ))
  .add('With href', () => (
    <Card href="/test">
      <Section noPadding name="Test" />
    </Card>
  ))
  .add('With dumb href', () => (
    <Card hrefDumb href="/test">
      <Section noPadding name="Test" />
    </Card>
  ))
  .add('Disabled', () => (
    <Card disabled>
      <Section noPadding name="Test" />
    </Card>
  ))
  .add('Disabled with href', () => (
    <Card disabled href="/test">
      <Section noPadding name="Test" />
    </Card>
  ))
  .add('Disabled with linkUrl', () => (
    <Card disabled linkUrl="/test">
      <Section noPadding name="Test" />
    </Card>
  ));
