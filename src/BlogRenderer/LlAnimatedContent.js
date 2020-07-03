import PropTypes from 'prop-types';
import React from 'react';

const LlAnimatedContent = props => {
  const { children, className, ...rest } = props;

  return <div {...rest}>{children}</div>;
};

LlAnimatedContent.propTypes = {
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object,
};

LlAnimatedContent.defaultProps = {
  className: null,
  children: null,
};

export default LlAnimatedContent;
