/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

import ImageDumb from './ImageDumb';

const Image = props => {
  const [hidden, setHidden] = useState(true);

  const onImageLoad = () => {
    setHidden(false);
  };

  return <ImageDumb hidden={hidden} onImageLoad={onImageLoad} {...props} />;
};

export default Image;
