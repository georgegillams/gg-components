import React from 'react';
import PropTypes from 'prop-types';

import { CodeInline } from '../Code';
import { SubSection } from '../Typography';

const ColourPalleteItem = props => {
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
      <SubSection anchor={false}>
        {colourName}
        <br />
        <CodeInline>{colour}</CodeInline>
      </SubSection>
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

ColourPalleteItem.propTypes = {
  colourName: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
};

export default ColourPalleteItem;
