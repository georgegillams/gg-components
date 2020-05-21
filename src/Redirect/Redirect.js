import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect as RRDRedirect } from 'react-router-dom';

import HelperFunctions from '../helpers/HelperFunctions';
import { Section, TextLink } from '../Typography';

class Redirect extends Component {
  constructor(props) {
    super(props);

    this.state = { isTimeToRedirect: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isTimeToRedirect: true });
    }, 2000);
  }

  render() {
    const { name, to, ...rest } = this.props;

    const externalRedirect = HelperFunctions.includes(to, 'http');

    if (externalRedirect && this.state.isTimeToRedirect) {
      document.location = to;
    }

    return (
      <div {...rest}>
        {!externalRedirect && this.state.isTimeToRedirect && (
          <RRDRedirect to={to} />
        )}
        <Section name={name || 'Redirecting in 2 seconds...'}>
          <TextLink to={to}>Not been redirected? Click here.</TextLink>
        </Section>
      </div>
    );
  }
}

Redirect.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string,
};

Redirect.defaultProps = {
  name: null,
};

export default Redirect;
