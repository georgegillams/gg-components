/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';
import Skeleton from '../Skeletons/Skeleton';

import STYLES from './image.scss';

const getClassName = cssModules(STYLES);

const ImageDumb = props => {
  const {
    aspectX,
    aspectY,
    loaded,
    lightSrc,
    darkSrc,
    renderImg,
    onImageLoad,
    className,
    imgProps,
    ...rest
  } = props;
  const { className: imgClassName, ...imgPropsRest } = imgProps;

  const [transitioning, setTransitioning] = useState(false);

  const [renderSkeleton, setRenderSkeleton] = useState(!loaded);
  const [showImage, setShowImage] = useState(loaded);
  const [showSkeleton, setShowSkeleton] = useState(!loaded);

  const [lightImageLoaded, setLightImageLoaded] = useState(false);
  const [darkImageLoaded, setDarkImageLoaded] = useState(false);

  const [enableSrc, setEnableSrc] = useState(false);

  useEffect(() => {
    setEnableSrc(true);
  }, []);

  useEffect(() => {
    if (loaded && !showImage) {
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
    if (!loaded && showImage) {
      setTransitioning(true);
      setShowSkeleton(true);
      setRenderSkeleton(true);
      setTimeout(() => {
        setShowImage(false);
        setTransitioning(false);
      }, 400);
    }
  }, [loaded, transitioning]);

  useEffect(() => {
    if (lightImageLoaded && darkImageLoaded && onImageLoad) {
      onImageLoad();
    }
  }, [lightImageLoaded, darkImageLoaded, onImageLoad]);

  const onLightImageLoad = () => {
    setLightImageLoaded(true);
  };

  const onDarkImageLoad = () => {
    setDarkImageLoaded(true);
  };

  const imgClassNames = [getClassName('image__img')];
  const skeletonClassNames = [getClassName('image__skeleton')];

  imgClassNames.push(getClassName('image__img--animated'));
  skeletonClassNames.push(getClassName('image__skeleton--animated'));
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
  if (imgClassName) {
    darkImgClassNames.push(imgClassName);
    lightImgClassNames.push(imgClassName);
  }

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
              // This is a hack to ensure that the src is set after onload is.
              // Otherwise onload may never be called as the image is already loaded when it's set
              src={enableSrc && lightSrc}
              {...imgPropsRest}
            />
            <img
              className={darkImgClassNames.join(' ')}
              onLoad={onDarkImageLoad}
              // This is a hack to ensure that the src is set after onload is.
              // Otherwise onload may never be called as the image is already loaded when it's set
              src={enableSrc && darkSrc}
              {...imgPropsRest}
            />
          </>
        )}
        <noscript>
          <>
            <img
              className={getClassName('image__img', 'image__img--light')}
              src={lightSrc}
              {...imgPropsRest}
            />
            <img
              className={getClassName('image__img', 'image__img--dark')}
              src={darkSrc}
              {...imgPropsRest}
            />
          </>
        </noscript>
      </div>
    </div>
  );
};

ImageDumb.propTypes = {
  aspectX: PropTypes.number.isRequired,
  aspectY: PropTypes.number.isRequired,
  loaded: PropTypes.bool,
  renderImg: PropTypes.bool,
  onImageLoad: PropTypes.func,
  className: PropTypes.string,
  lightSrc: PropTypes.string.isRequired,
  darkSrc: PropTypes.string.isRequired,
  imgProps: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
  }),
};

ImageDumb.defaultProps = {
  loaded: false,
  renderImg: true,
  onImageLoad: null,
  className: null,
  imgProps: {},
};

export default ImageDumb;
