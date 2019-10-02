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

import { withScroll } from './index';

class ScrollReporter extends Component {
  render() {
    const {
      inView,
      scrollPosition,

      outOfView,
      justInView,
      mostlyInView,
      fullyInView,

      hasBeenInView,
      hasBeenOutOfView,
      hasBeenJustInView,
      hasBeenMostlyInView,
      hasBeenFullyInView,
    } = this.props;

    return (
      <div
        style={{
          width: '100%',
          backgroundColor: 'red',
          padding: '2rem 0 10rem 0',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {`inView: ${inView ? 'YES' : 'NO'}`}
        <br />
        {`scrollPosition: ${scrollPosition}`}
        <br />
        {`outOfView: ${outOfView}`}
        <br />
        {`justInView: ${justInView}`}
        <br />
        {`mostlyInView: ${mostlyInView}`}
        <br />
        {`fullyInView: ${fullyInView}`}
        <br />
        {`hasBeenInView: ${hasBeenInView ? 'YES' : 'NO'}`}
        <br />
        {`hasBeenOutOfView: ${hasBeenOutOfView}`}
        <br />
        {`hasBeenJustInView: ${hasBeenJustInView}`}
        <br />
        {`hasBeenMostlyInView: ${hasBeenMostlyInView}`}
        <br />
        {`hasBeenFullyInView: ${hasBeenFullyInView}`}
      </div>
    );
  }
}

const ScrollReportedWithScroll = withScroll(ScrollReporter);

storiesOf('Scroll container', module).add('ScrollContainer', () => (
  <div
    style={{
      height: '200vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'end',
    }}
  >
    <ScrollReportedWithScroll />
  </div>
));
