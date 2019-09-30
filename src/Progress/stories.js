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

import { Progress } from './index';

const INTERACTIVE_INCREMENT = 33;

class StatefulProgress extends Component {
  constructor(props) {
    super(props);

    this.state = { progress: 0 };
  }

  render() {
    return (
      <div>
        <Progress progress={this.state.progress} {...this.props} />
        {this.state.progress < 100 && (
          <button
            onClick={() => {
              this.setState({
                progress: this.state.progress + INTERACTIVE_INCREMENT,
              });
            }}
          >
            Increment
          </button>
        )}
        {this.state.progress >= 100 && (
          <button
            onClick={() => {
              this.setState({
                progress: 0,
              });
            }}
          >
            Reset
          </button>
        )}
      </div>
    );
  }
}

storiesOf('Progress', module)
  .add('Default', () => <Progress progress={50} />)
  .add('Error', () => <Progress error progress={50} />)
  .add('Stateful', () => <StatefulProgress />);
