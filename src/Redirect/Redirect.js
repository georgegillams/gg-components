import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HelperFunctions from '../helpers/HelperFunctions';
import { Redirect } from 'react-router-dom';

import { Section, TextLink } from '../Typography';

class GGRedirect extends Component {
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
          <Redirect to={to} />
        )}
        <Section name={name || 'Redirecting in 2 seconds...'}>
          <TextLink to={to}>Not been redirected? Click here.</TextLink>
        </Section>
      </div>
    );
  }
}

GGRedirect.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string,
};

GGRedirect.defaultProps = {
  name: null,
};

export default GGRedirect;
