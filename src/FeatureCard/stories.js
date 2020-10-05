import React from 'react';

import { FeatureCard, FEATURE_CARD_LAYOUTS } from './index';

const image = 'https://via.placeholder.com/460x460/red/white?text=image';
const backgroundImage =
  'https://via.placeholder.com/460x210/blue/black?text=image';

export default { title: 'Feature card', component: FeatureCard };

export const Default = () => (
  <FeatureCard
    ariaLabel="This is the aria label"
    annotations={['23', 'Jan']}
    href="/test"
    title="Title here"
    imageBorder="orchid"
    imageSrc={image}
  />
);
export const Narrow = () => (
  <FeatureCard
    ariaLabel="This is the aria label"
    layout={FEATURE_CARD_LAYOUTS.narrow}
    annotations={['23', 'Jan']}
    href="/test"
    title="Title here"
    imageBorder="orchid"
    imageSrc={image}
  />
);
export const NarrowCompact = () => (
  <FeatureCard
    ariaLabel="This is the aria label"
    layout={FEATURE_CARD_LAYOUTS.narrowCompact}
    annotations={['23', 'Jan']}
    href="/test"
    title="Title here"
    imageBorder="orchid"
    imageSrc={image}
  />
);
export const NarrowCompactNoImage = () => (
  <FeatureCard
    ariaLabel="This is the aria label"
    layout={FEATURE_CARD_LAYOUTS.narrowCompact}
    annotations={['23', 'Jan']}
    href="/test"
    title="Title here"
    imageBorder="orchid"
  />
);
NarrowCompactNoImage.storyName = 'Narrow Compact - No Image';

export const WithFillImage = () => (
  <FeatureCard
    ariaLabel="This is the aria label"
    annotations={['23', 'Jan']}
    fillImageSrc={backgroundImage}
    href="/test"
    title="Title here"
    imageBorder="orchid"
    imageSrc={image}
  />
);
export const WithBannerColour = () => (
  <FeatureCard
    ariaLabel="This is the aria label"
    annotations={['23', 'Jan']}
    href="/test"
    title="Title here"
    imageBorder="orchid"
    imageSrc={image}
    bannerColor="red"
  />
);
export const WithoutImage = () => (
  <FeatureCard
    ariaLabel="This is the aria label"
    annotations={['23', 'Jan']}
    href="/test"
    title="Title here"
    imageBorder="orchid"
    bannerColor="red"
  />
);
export const Light = () => (
  <FeatureCard
    ariaLabel="This is the aria label"
    annotations={['23', 'Jan']}
    href="/test"
    title="Title here"
    imageBorder="orchid"
    imageSrc={image}
    light
  />
);
export const Disabled = () => (
  <FeatureCard
    ariaLabel="This is the aria label"
    annotations={['23', 'Jan']}
    href="/test"
    title="Title here"
    imageBorder="orchid"
    imageSrc={image}
    disabled
  />
);
export const WithHref = () => (
  <FeatureCard
    ariaLabel="This is the aria label"
    annotations={['23', 'Jan']}
    href="/test"
    title="Title here"
    imageBorder="orchid"
    imageSrc={image}
  />
);
