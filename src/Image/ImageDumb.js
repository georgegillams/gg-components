/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';
import Skeleton from '../Skeletons/Skeleton';

import STYLES from './image.scss';

const getClassName = cssModules(STYLES);

const ImageDumb = props => {
  const {
    aspectX,
    aspectY,
    hidden,
    lightSrc,
    darkSrc,
    renderImg,
    onImageLoad,
    className,
    imgProps,
    ...rest
  } = props;

  const imageElement = useRef(null);

  const [transitioning, setTransitioning] = useState(false);

  const [renderSkeleton, setRenderSkeleton] = useState(hidden);
  const [showImage, setShowImage] = useState(!hidden);
  const [showSkeleton, setShowSkeleton] = useState(hidden);

  const [lightImageLoaded, setLightImageLoaded] = useState(false);
  const [darkImageLoaded, setDarkImageLoaded] = useState(false);

  useEffect(() => {
    if (transitioning) {
      return;
    }
    if (!hidden && !showImage) {
      setTransitioning(true);
      setShowImage(true);
      setTimeout(() => {
        setShowSkeleton(false);
        setTimeout(() => {
          setRenderSkeleton(false);
          setTransitioning(false);
        }, 400);
      }, 400);
    }
    if (hidden && showImage) {
      setTransitioning(true);
      setShowSkeleton(true);
      setRenderSkeleton(true);
      setTimeout(() => {
        setShowImage(false);
        setTransitioning(false);
      }, 400);
    }
  }, [hidden, transitioning]);

  useEffect(() => {
    if (lightImageLoaded && darkImageLoaded && onImageLoad) {
      onImageLoad();
    }
  }, [lightImageLoaded, darkImageLoaded]);

  const onLightImageLoad = () => {
    setLightImageLoaded(true);
  };

  const onDarkImageLoad = () => {
    setDarkImageLoaded(true);
  };

  const imgClassNames = [getClassName('image__img')];
  const skeletonClassNames = [getClassName('image__skeleton')];

  if (!showImage) {
    imgClassNames.push(getClassName('image__img--hidden'));
  }
  if (!showSkeleton) {
    skeletonClassNames.push(getClassName('image__skeleton--hidden'));
  }
  const lightImgClassNames = [
    ...imgClassNames,
    getClassName('image__img--light'),
  ];
  const darkImgClassNames = [
    ...imgClassNames,
    getClassName('image__img--dark'),
  ];

  const aspectRatio = (100 * aspectY) / aspectX;

  return (
    <div className={getClassName('image__outer', className)} {...rest}>
      <div
        className={getClassName('image__placeholder')}
        style={{ paddingBottom: `${aspectRatio}%` }}
      >
        {renderSkeleton && (
          <div className={getClassName('image__spinner-container')}>
            <Skeleton className={skeletonClassNames.join(' ')} />
          </div>
        )}
        {renderImg && (
          <>
            <img
              className={lightImgClassNames.join(' ')}
              onLoad={onLightImageLoad}
              ref={imageElement}
              src={lightSrc}
              {...imgProps}
            />
            <img
              className={darkImgClassNames.join(' ')}
              onLoad={onDarkImageLoad}
              ref={imageElement}
              src={darkSrc}
              {...imgProps}
            />
          </>
        )}
      </div>
    </div>
  );
};

ImageDumb.propTypes = {
  aspectX: PropTypes.number.isRequired,
  aspectY: PropTypes.number.isRequired,
  hidden: PropTypes.bool,
  renderImg: PropTypes.bool,
  onImageLoad: PropTypes.func,
  className: PropTypes.string,
  lightSrc: PropTypes.string.isRequired,
  darkSrc: PropTypes.string.isRequired,
  imgProps: PropTypes.shape({
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

ImageDumb.defaultProps = {
  hidden: false,
  renderImg: true,
  onImageLoad: null,
  className: null,
};

export default ImageDumb;
