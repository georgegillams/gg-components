import React from 'react';

import { Section } from '../Section';

import backgroundImage from './backgroundImage.png';

import { Card } from './index';

export default { title: 'Card', component: Card };

export const Default = () => (
  <Card href="/test">
    <Section noPadding name="Test" />{' '}
  </Card>
);
export const Highlighted = () => (
  <Card highlighted href="/test">
    <Section noPadding name="Test" />{' '}
  </Card>
);
export const Unpadded = () => (
  <Card padded={false} href="/test">
    <Section noPadding name="Test" />{' '}
  </Card>
);
export const WithFillImage = () => (
  <Card fillImageSrc={backgroundImage} href="/test">
    <Section noPadding name="Test" />{' '}
  </Card>
);
export const WithBannerColour = () => (
  <Card href="/test" bannerColor="red">
    <Section noPadding name="Test" />{' '}
  </Card>
);
export const Light = () => (
  <Card href="/test" light>
    <Section noPadding name="Test" />{' '}
  </Card>
);
export const WithHref = () => (
  <Card href="/test">
    <Section noPadding name="Test" />{' '}
  </Card>
);
export const WithDumbHref = () => (
  <Card hrefDumb href="/test">
    <Section noPadding name="Test" />{' '}
  </Card>
);
export const Disabled = () => (
  <Card disabled>
    <Section disabled noPadding name="Test" />{' '}
  </Card>
);
export const DisabledWithHref = () => (
  <Card disabled href="/test">
    <Section noPadding name="Test" />{' '}
  </Card>
);
