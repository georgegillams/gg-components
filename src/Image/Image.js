/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';

import ImageDumb from './ImageDumb';

const Image = props => {
  const [hidden, setHidden] = useState(true);

  const [isServer, setIsServer] = useState(typeof window === 'undefined');

  useEffect(() => {
    setIsServer(false);
  }, []);

  const onImageLoad = () => {
    setHidden(false);
  };

  return (
    <ImageDumb
      isServer={isServer}
      hidden={hidden}
      onImageLoad={onImageLoad}
      {...props}
    />
  );
};

export default Image;
