import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';
import { Subsection } from '../Subsection';
import { Skeleton } from '../Skeletons';

import STYLES from './loading-cover.scss';

const getClassName = cssModules(STYLES);

const LoadingCover = props => {
  const {
    loadingSkeleton: LoadingSkeleton,
    loading,
    error,
    children,
    ...rest
  } = props;

  const showLoadingMessage = loading || error;

  if (!showLoadingMessage) {
    return children || null;
  }

  return (
    <div className={getClassName('loading-cover__outer-container')} {...rest}>
      <div className={getClassName('loading-cover__overlay')}>
        {LoadingSkeleton && <LoadingSkeleton aria-label="Loading" />}
        {error && (
          <Subsection
            name="This is taking a while. Maybe something isn't quite right..."
            noPadding
            anchor={false}
            className={getClassName('loading-cover__overlay--content')}
          />
        )}
      </div>
    </div>
  );
};

LoadingCover.propTypes = {
  loading: PropTypes.bool,
  loadingSkeleton: PropTypes.elementType,
  error: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

LoadingCover.defaultProps = {
  loading: false,
  loadingSkeleton: Skeleton,
  error: false,
};

export default LoadingCover;
