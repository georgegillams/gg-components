import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect as RRDRedirect } from 'react-router-dom';

import HelperFunctions from '../helpers/HelperFunctions';
import { Section, TextLink } from '../Typography';

const Redirect = props => {
  const [isTimeToRedirect, setIsTimeToRedirect] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTimeToRedirect(true);
    }, 2000);

    const cleanUp = () => {
      clearTimeout(timeout);
    };
    return cleanUp;
  });

  const { name, to, ...rest } = props;

  const externalRedirect = HelperFunctions.includes(to, 'http');

  if (externalRedirect && isTimeToRedirect) {
    document.location = to;
  }

  return (
    <div {...rest}>
      {!externalRedirect && isTimeToRedirect && <RRDRedirect to={to} />}
      <Section name={name || 'Redirecting in 2 seconds...'}>
        <TextLink to={to}>Not been redirected? Click here.</TextLink>
      </Section>
    </div>
  );
};

Redirect.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string,
};

Redirect.defaultProps = {
  name: null,
};

export default Redirect;
