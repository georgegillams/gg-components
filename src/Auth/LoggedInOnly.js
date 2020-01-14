import React from 'react';
import PropTypes from 'prop-types';

import { Paragraph, TextLink, Section } from '../Typography';

const LoggedInOnly = props => {
  const { user, activityName, children, setLoginRedirect, ...rest } = props;

  if (!user) {
    return (
      <Section name="Logged out" {...rest}>
        <Paragraph>
          You need to be logged in to {activityName || 'view this content'}
          <br />
          <TextLink to="/sign-up">
            Register here - it&apos;s quick and easy.
          </TextLink>
          <br />
          <TextLink onClick={setLoginRedirect} to="/login">
            Already got an account? Log in here.
          </TextLink>
        </Paragraph>
      </Section>
    );
  }

  return children;
};

LoggedInOnly.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
  activityName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LoggedInOnly;
