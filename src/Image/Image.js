/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

import ImageDumb from './ImageDumb';

const Image = props => {
  const [loaded, setLoaded] = useState(false);

  const onImageLoad = () => {
    setLoaded(true);
  };

  return <ImageDumb loaded={loaded} onImageLoad={onImageLoad} {...props} />;
};

export default Image;
