/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { BurgerButton } from './index';

const StatefulBurger = props => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BurgerButton
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      isOpen={isOpen}
      {...props}
    />
  );
};

export default { title: 'Burger button', component: BurgerButton };
export const Closed = () => <BurgerButton onClick={action('burger clicked')} />;
export const Open = () => (
  <BurgerButton onClick={action('burger clicked')} isOpen />
);
export const Stateful = () => <StatefulBurger />;
