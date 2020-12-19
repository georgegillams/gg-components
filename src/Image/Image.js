/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

import { useEntryAnimationClientOnly } from '../ServerSideRendering';

import ImageDumb from './ImageDumb';

const Image = props => {
  const [loaded, setLoaded] = useState(false);

  const [isFirstRender, animationsEnabled] = useEntryAnimationClientOnly();

  const onImageLoad = () => {
    setLoaded(true);
  };

  return (
    <ImageDumb
      isFirstRender={isFirstRender}
      animationsEnabled={animationsEnabled}
      loaded={loaded}
      onImageLoad={onImageLoad}
      {...props}
    />
  );
};

export default Image;
