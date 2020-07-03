/* @flow strict */

import React from 'react';
import { storiesOf } from '@storybook/react';

import backgroundImage from './backgroundImage.png';
import image from './image.png';

import { ArticleCard, ARTICLE_CARD_LAYOUTS } from './index';

storiesOf('Article card', module)
  .add('Default', () => (
    <ArticleCard
      day="23"
      month="Jan"
      linkUrl="/test"
      title="Title here"
      imageBorder="orchid"
      imageSrc={image}
    />
  ))
  .add('Narrow', () => (
    <ArticleCard
      layout={ARTICLE_CARD_LAYOUTS.narrow}
      day="23"
      month="Jan"
      linkUrl="/test"
      title="Title here"
      imageBorder="orchid"
      imageSrc={image}
    />
  ))
  .add('Narrow compact', () => (
    <ArticleCard
      layout={ARTICLE_CARD_LAYOUTS.narrowCompact}
      day="23"
      month="Jan"
      linkUrl="/test"
      title="Title here"
      imageBorder="orchid"
      imageSrc={image}
    />
  ))
  .add('Narrow compact - no image', () => (
    <ArticleCard
      layout={ARTICLE_CARD_LAYOUTS.narrowCompact}
      day="23"
      month="Jan"
      linkUrl="/test"
      title="Title here"
      imageBorder="orchid"
    />
  ))
  .add('With fill image', () => (
    <ArticleCard
      day="23"
      month="Jan"
      fillImageSrc={backgroundImage}
      linkUrl="/test"
      title="Title here"
      imageBorder="orchid"
      imageSrc={image}
    />
  ))
  .add('With banner colour', () => (
    <ArticleCard
      day="23"
      month="Jan"
      linkUrl="/test"
      title="Title here"
      imageBorder="orchid"
      imageSrc={image}
      bannerColor="red"
    />
  ))
  .add('Without image', () => (
    <ArticleCard
      day="23"
      month="Jan"
      linkUrl="/test"
      title="Title here"
      imageBorder="orchid"
      bannerColor="red"
    />
  ))
  .add('Light', () => (
    <ArticleCard
      day="23"
      month="Jan"
      linkUrl="/test"
      title="Title here"
      imageBorder="orchid"
      imageSrc={image}
      light
    />
  ))
  .add('With href', () => (
    <ArticleCard
      day="23"
      month="Jan"
      href="/test"
      title="Title here"
      imageBorder="orchid"
      imageSrc={image}
    />
  ));
