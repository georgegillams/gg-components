import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import ImageDumb from './ImageDumb';

import { Image } from './index';

const StatefulImageDumb = props => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <ImageDumb
        {...{
          loaded,
          isFirstRender,
          animationsEnabled,
        }}
        {...props}
      />
      <button
        type="button"
        onClick={() => {
          setIsFirstRender(!isFirstRender);
        }}
      >
        {isFirstRender ? 'Set not first render' : 'Set first render'}
      </button>
      <button
        type="button"
        onClick={() => {
          setAnimationsEnabled(!animationsEnabled);
        }}
      >
        {animationsEnabled ? 'Disable animations' : 'Enable animations'}
      </button>
      <button
        type="button"
        onClick={() => {
          setLoaded(!loaded);
        }}
      >
        {loaded ? 'Unload' : 'Load'}
      </button>
    </>
  );
};

storiesOf('Image - dumb', module)
  .add('Default', () => (
    <ImageDumb
      loaded
      isFirstRender={false}
      animationsEnabled
      aspectX={460}
      aspectY={210}
      lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
      darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
      imgProps={{
        alt: 'Some description',
      }}
    />
  ))
  .add('Server', () => (
    <ImageDumb
      isFirstRender
      aspectX={460}
      aspectY={210}
      lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
      darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
      imgProps={{
        alt: 'Some description',
      }}
    />
  ))
  .add('With img className', () => (
    <ImageDumb
      loaded
      isFirstRender={false}
      animationsEnabled
      aspectX={460}
      aspectY={210}
      lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
      darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
      imgProps={{
        alt: 'Some description',
        className: 'test',
      }}
    />
  ))
  .add('Width percent', () => (
    <ImageDumb
      loaded
      isFirstRender={false}
      animationsEnabled
      aspectX={460}
      aspectY={210}
      lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
      darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
      imgProps={{
        alt: 'Some description',
      }}
      style={{ width: '70%' }}
    />
  ))
  .add('Width absolute', () => (
    <ImageDumb
      loaded
      isFirstRender={false}
      animationsEnabled
      aspectX={460}
      aspectY={210}
      lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
      darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
      imgProps={{
        alt: 'Some description',
      }}
      style={{ width: '35rem' }}
    />
  ))
  .add('Stateful', () => (
    <StatefulImageDumb
      aspectX={460}
      aspectY={210}
      lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
      darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
      imgProps={{
        alt: 'Some description',
      }}
    />
  ))
  .add('Not loaded', () => (
    <ImageDumb
      loaded={false}
      aspectX={460}
      aspectY={210}
      lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
      darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
      imgProps={{
        alt: 'Some description',
      }}
    />
  ))
  .add('Not loaded width percent', () => (
    <ImageDumb
      loaded={false}
      aspectX={460}
      aspectY={210}
      lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
      darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
      imgProps={{
        alt: 'Some description',
      }}
      style={{ width: '70%' }}
    />
  ))
  .add('Not loaded width absolute', () => (
    <ImageDumb
      loaded={false}
      aspectX={460}
      aspectY={210}
      lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
      darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
      imgProps={{
        alt: 'Some description',
      }}
      style={{ width: '35rem' }}
    />
  ))
  .add('Down the page', () => (
    <>
      <div style={{ height: '50rem', width: '100%', background: 'red' }} />
      <ImageDumb
        loaded
        isFirstRender={false}
        animationsEnabled
        aspectX={460}
        aspectY={210}
        lightSrc="https://live.staticflickr.com/65535/49195241431_7880522df6_k.jpg"
        darkSrc="https://live.staticflickr.com/65535/49195241431_7880522df6_k.jpg"
        imgProps={{
          alt: 'Some description',
        }}
      />
    </>
  ));

storiesOf('Image', module)
  .add('Loading', () => (
    <Image
      aspectX={460}
      aspectY={210}
      lightSrc="null"
      darkSrc="null"
      imgProps={{
        alt: 'Some description',
      }}
    />
  ))
  .add('Default', () => (
    <Image
      aspectX={460}
      aspectY={210}
      lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
      darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
      imgProps={{
        alt: 'Some description',
      }}
    />
  ))
  .add('Server', () => (
    <Image
      isFirstRender
      aspectX={460}
      aspectY={210}
      lightSrc="https://via.placeholder.com/460x210/red/white?text=image"
      darkSrc="https://via.placeholder.com/460x210/blue/black?text=image"
      imgProps={{
        alt: 'Some description',
      }}
    />
  ));
