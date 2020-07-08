// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// import Image from './Image';

// const LazyLoadImage = props => {
//   const [hidden, setHidden] = useState(true);

//   const { ...rest } = props;

//   const onImageLoad = () => {
//     setHidden(false);
//   };

//   return (
//     <Image
//       renderImg={false}
//       onImageLoad={onImageLoad}
//       hidden={hidden}
//       {...rest}
//     />
//   );
// };

// LazyLoadImage.propTypes = {
//   alt: PropTypes.string.isRequired,
//   src: PropTypes.string.isRequired,
// };

// LazyLoadImage.propTypes = {};

// export default LazyLoadImage;
