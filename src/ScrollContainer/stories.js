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
