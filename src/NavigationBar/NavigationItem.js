import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';

const NavigationItem = props => {
  const { name, linkUrl, className, ...rest } = props;

  return (
    <Button href={linkUrl} bouncy buttonClassName={className} {...rest}>
      {name}
    </Button>
  );
};

NavigationItem.propTypes = {
  name: PropTypes.string,
  linkUrl: PropTypes.string,
  className: PropTypes.string,
};

NavigationItem.defaultProps = {
  name: null,
  linkUrl: null,
  className: null,
};

export default NavigationItem;
