import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Section } from '../Typography';
import { cssModules } from '../helpers/cssModules';
import { ObjectAsList } from '../ObjectAsList';

import STYLES from './debug-object.scss';

const getClassName = cssModules(STYLES);

const DebugObject = props => {
  const [showDebug, setShowDebug] = useState(false);

  useEffect(() => {
    setShowDebug(
      window.localStorage.getItem('showSessionDebugViews') === 'true',
    );
  }, []);

  if (!showDebug) {
    return null;
  }

  const { debugTitle, debugObject } = props;

  return (
    <Section
      className={getClassName('debug-object__main')}
      name={`${debugTitle || 'Debug object'}`}
    >
      <ObjectAsList value={debugObject} />
    </Section>
  );
};

DebugObject.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  debugObject: PropTypes.object.isRequired,
  debugTitle: PropTypes.string,
};

DebugObject.defaultProps = {
  debugTitle: null,
};

export default DebugObject;
