/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { AnimateHeight } from './index';

const content1 = 'Lorem ipse dolor sit';
const content2 =
  'Lorem ipse dolor siLorem ipse dolor siLorem ipse dolor siLorem ipse dolor siLorem ipse dolor siLorem ipse dolor siLorem ipse dolor sitttttttLorem ipse dolor sit';
const StatefulAnimateHeight = props => {
  const [expanded, setExpanded] = useState(false);
  const [content, setContent] = useState(false);

  return (
    <>
      <AnimateHeight expanded={expanded} {...props}>
        {content ? content1 : content2}
      </AnimateHeight>
      <button
        type="button"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        Toggle expanded
      </button>
      <button
        type="button"
        onClick={() => {
          setContent(!content);
        }}
      >
        Toggle content
      </button>
    </>
  );
};

storiesOf('Animate height', module)
  .add('Expanded', () => <AnimateHeight expanded>{content1}</AnimateHeight>)
  .add('Collapsed', () => <AnimateHeight>{content1}</AnimateHeight>)
  .add('Stateful', () => <StatefulAnimateHeight />);
