import React from 'react';
import PropTypes from 'prop-types';

import { CodeInline } from '../Code';
import { Paragraph } from '../Paragraph';

const ColourPalletteItem = props => {
  const { colourName, colour, ...rest } = props;

  return (
    <div
      style={{
        margin: '0 1rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      {...rest}
    >
      <Paragraph style={{ marginBottom: '.2rem' }}>{colourName}</Paragraph>
      <CodeInline style={{ marginBottom: '.5rem' }}>{colour}</CodeInline>
      <div
        style={{
          width: '5rem',
          height: '5rem',
          backgroundColor: colour,
          borderRadius: '5rem',
        }}
      />
    </div>
  );
};

ColourPalletteItem.propTypes = {
  colourName: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
};

export default ColourPalletteItem;
