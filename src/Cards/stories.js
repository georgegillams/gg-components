/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2019 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow strict */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Section } from '../Typography';
import { Card, ArticleCard, ARTICLE_CARD_LAYOUTS } from './index';

import backgroundImage from './backgroundImage.png';
import image from './image.png';

storiesOf('Card', module)
  .add('Default', () => (
    <Card linkUrl="/test">
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
  ));

storiesOf('ArticleCard', module)
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
  .add('Wtih href', () => (
    <ArticleCard
      day="23"
      month="Jan"
      href="/test"
      title="Title here"
      imageBorder="orchid"
      imageSrc={image}
    />
  ));
