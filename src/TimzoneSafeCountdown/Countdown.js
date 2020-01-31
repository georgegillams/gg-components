import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CountdownDumb } from './index';

const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = MS_PER_SECOND * 60;
const MS_PER_HOUR = MS_PER_MINUTE * 60;
const MS_PER_DAY = MS_PER_HOUR * 24;

class Countdown extends Component {
  static propTypes = {
    toUTCTimestamp: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { lastUpdated: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ lastUpdated: new Date().getTime() });
    }, 500);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.timeInterval);
    }
  }

  render = () => {
    const { toUTCTimestamp, ...rest } = this.props;

    const now = new Date();
    let msDiff = toUTCTimestamp - now.getTime();

    return <CountdownDumb millis={msDiff} {...rest}></CountdownDumb>;
  };
}

export default Countdown;
