/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2019 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow strict */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { NotificationCollection, NotificationComp } from './index';

// class StatefulBurger extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = { isOpen: false };
//   }
//
//   render() {
//     return (
//       <BurgerButton
//         onClick={() => {
//           this.setState({ isOpen: !this.state.isOpen });
//         }}
//         isOpen={this.state.isOpen}
//         {...this.props}
//       />
//     );
//   }
// }
//
// const ButtonStory = ({
//   className,
//   dark,
//   ...rest
// }: {
//   dark: boolean,
//   className: ?string,
// }) => (
//   <div
//     style={{
//       backgroundColor: dark ? '#1e1e1e' : 'transparent',
//     }}
//   >
//     <GGButton onClick={action('button clicked')} {...rest}>
//       Button
//     </GGButton>
//   </div>
// );
//
// ButtonStory.defaultProps = { className: null, dark: false };

storiesOf('Notifications', module)
  .add('NotificationComp - link', () => (
    <NotificationComp type="success">{`Hi. Here\'s a [link](/test)`}</NotificationComp>
  ))
  .add('NotificationComp - extenal link', () => (
    <NotificationComp type="success">{`Hi. Here\'s a [link](https://www.google.com/)`}</NotificationComp>
  ));
