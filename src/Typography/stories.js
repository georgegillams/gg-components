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

import {
  ArticleDate,
  Quote,
  Section,
  SubSection,
  AnimatedContent,
  TextLink,
} from './index';

class StatefulAnimatedContent extends Component {
  constructor(props) {
    super(props);

    this.state = { inView: false };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ inView: !this.state.inView });
          }}
        >
          Toggle
        </button>
        <AnimatedContent inView={this.state.inView} {...this.props} />
      </div>
    );
  }
}

storiesOf('Quote', module).add('default', () => (
  <Quote>Lorem ipse dolor sit amet.</Quote>
));
storiesOf('Section', module)
  .add('Default', () => <Section name="Test" />)
  .add('With anchor', () => <Section anchor name="Test" />)
  .add('No padding', () => <Section anchor noPadding name="Test" />)
  .add('With content and padding', () => (
    <Section anchor name="Test">
      Some content
    </Section>
  ))
  .add('With content', () => (
    <Section noPadding anchor name="Test">
      Some content
    </Section>
  ))
  .add('No padding no anchor', () => (
    <Section anchor={false} noPadding name="Test" />
  ))
  .add('Link', () => (
    <Section anchor={false} noPadding name="Test" link></Section>
  ));
storiesOf('SubSection', module)
  .add('Default', () => <SubSection name="Test" />)
  .add('Without anchor', () => <SubSection name="Test" anchor={false} />)
  .add('No padding', () => <SubSection noPadding name="Test" />)
  .add('With content and padding', () => (
    <SubSection name="Test">Some content</SubSection>
  ))
  .add('With content', () => (
    <SubSection noPadding name="Test">
      Some content
    </SubSection>
  ));
storiesOf('TextLink', module)
  .add('Default', () => (
    <TextLink href="/lol" name="Test">
      Test
    </TextLink>
  ))
  .add('External', () => (
    <div>
      This is an external link to{' '}
      <TextLink external href="/lol" name="Test">
        Test
      </TextLink>{' '}
      content on another site.
    </div>
  ));
storiesOf('ArticleDate', module).add('default', () => (
  <ArticleDate date={new Date()} />
));
storiesOf('AnimatedContent', module)
  .add('In view', () => (
    <AnimatedContent inView>
      <div style={{ width: '1rem', height: '1rem', backgroundColor: 'red' }} />
    </AnimatedContent>
  ))
  .add('Out of view', () => (
    <AnimatedContent inView={false}>
      <div style={{ width: '1rem', height: '1rem', backgroundColor: 'red' }} />
    </AnimatedContent>
  ))
  .add('Stateful', () => (
    <StatefulAnimatedContent>
      <div style={{ width: '1rem', height: '1rem', backgroundColor: 'red' }} />
    </StatefulAnimatedContent>
  ));
