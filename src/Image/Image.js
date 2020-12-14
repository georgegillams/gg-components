/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

import { useEntryAnimationClientOnly } from '../ServerSideRendering';

import ImageDumb from './ImageDumb';

const Image = props => {
  const [hidden, setHidden] = useState(true);

  const [isFirstRender, animationsEnabled] = useEntryAnimationClientOnly();

  const onImageLoad = () => {
    setHidden(false);
  };

  return (
    <ImageDumb
      isFirstRender={isFirstRender}
      animationsEnabled={animationsEnabled}
      hidden={hidden}
      onImageLoad={onImageLoad}
      {...props}
    />
  );
};

export default Image;
