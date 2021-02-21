import React from 'react';

import { FeatureCard, FEATURE_CARD_LAYOUTS } from './index';

const image = 'https://via.placeholder.com/460x460/red/white?text=image';
const backgroundImage =
  'https://via.placeholder.com/460x210/blue/black?text=image';

export default { title: 'Feature card', component: FeatureCard };

export const Default = () => (
  <FeatureCard
    annotations={['23', 'Jan']}
    href="/test"
    title="Title here"
    imageBorder="orchid"
    imageSrc={image}
  />
);
export const WithCustomAriaLabel = () => (
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
WithCustomAriaLabel.storyName = 'With custom ariaLabel';

export const Narrow = () => (
  <FeatureCard
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
    annotations={['23', 'Jan']}
    href="/test"
    title="Title here"
    imageBorder="orchid"
    bannerColor="red"
  />
);
export const Light = () => (
  <FeatureCard
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
    annotations={['23', 'Jan']}
    href="/test"
    title="Title here"
    imageBorder="orchid"
    imageSrc={image}
  />
);
