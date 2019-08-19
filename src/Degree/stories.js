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

import DegreeModule from './index';

const INTERACTIVE_INCREMENT = 33;

class StatefulDegreeModule extends Component {
  constructor(props) {
    super(props);

    this.state = { markerPosition: 70, percentage: 0 };
  }

  render() {
    return (
      <div>
        <DegreeModule
          name="Test"
          markerPosition={this.state.markerPosition}
          percentage={this.state.percentage}
          {...this.props}
        />
        {this.state.markerPosition < 100 && (
          <button
            onClick={() => {
              this.setState({
                markerPosition:
                  this.state.markerPosition + INTERACTIVE_INCREMENT,
              });
            }}
          >
            Increment markerPosition amount
          </button>
        )}
        {this.state.markerPosition >= 100 && (
          <button
            onClick={() => {
              this.setState({
                markerPosition: 0,
              });
            }}
          >
            Reset markerPosition amount
          </button>
        )}
        {this.state.percentage < 100 && (
          <button
            onClick={() => {
              this.setState({
                percentage: this.state.percentage + INTERACTIVE_INCREMENT,
              });
            }}
          >
            Increment percentage
          </button>
        )}
        {this.state.percentage >= 100 && (
          <button
            onClick={() => {
              this.setState({
                percentage: 0,
              });
            }}
          >
            Reset percentage
          </button>
        )}
      </div>
    );
  }
}

storiesOf('DegreeModule', module)
  .add('Default', () => (
    <DegreeModule name="Test" percentage={50} markerPosition={70} />
  ))
  .add('Stateful', () => <StatefulDegreeModule />);
