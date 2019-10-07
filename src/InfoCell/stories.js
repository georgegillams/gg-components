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

import { InfoCell, INFO_CELL_STYLES } from './index';
import { TextLink, SubSection } from '../Typography';

class StatefulStory extends Component {
  constructor() {
    super();

    this.state = { hasBeenMostlyInView: false };
  }

  render() {
    const { ...rest } = this.props;
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              hasBeenMostlyInView: !this.state.hasBeenMostlyInView,
            });
          }}
        >
          Toggle
        </button>
        <InfoCell
          hasBeenMostlyInView={this.state.hasBeenMostlyInView}
          {...rest}
        />
      </div>
    );
  }
}

storiesOf('Info cell', module)
  .add('Info cell', () => (
    <StatefulStory
      title="Title"
      content={<TextLink href="/test">Content</TextLink>}
      aux={
        <div
          style={{ width: '5rem', height: '5rem', backgroundColor: 'red' }}
        />
      }
    />
  ))
  .add('No aux', () => (
    <InfoCell
      title="Title"
      content={<TextLink href="/test">Content</TextLink>}
    />
  ))
  .add('No aux dark', () => (
    <InfoCell
      title="Title"
      cellStyle={INFO_CELL_STYLES.dark}
      content={<TextLink href="/test">Content</TextLink>}
    />
  ));
