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

import { Section } from '../Typography';
import { Code, CodeInline, CodeBashArrow } from './index';

storiesOf('CodeInline', module)
  .add('Default', () => <CodeInline>This is some code.</CodeInline>)
  .add('In text', () => (
    <Section padding={false}>
      This is a sentence containing <CodeInline>some</CodeInline> code.
    </Section>
  ));

storiesOf('Code block', module)
  .add('Default', () => (
    <Code>
      <pre>{`This is a code block containing preformatted text.
  this means that indentation {
    can {
      even {
        be {
          included
        }
      }
    }
  }`}</pre>
    </Code>
  ))
  .add('With lang', () => (
    <Code lang="JavaScript">
      <pre>{`This is a code block containing preformatted text.
  this means that indentation {
    can {
      even {
        be {
          included
        }
      }
    }
  }`}</pre>
    </Code>
  ))
  .add('With GitHub url', () => (
    <Code githubUrl="https://github.com/georgegillams/georgegillams.co.uk">
      <pre>{`This is a code block containing preformatted text.
  this means that indentation {
    can {
      even {
        be {
          included
        }
      }
    }
  }`}</pre>
    </Code>
  ))
  .add('With GitHub url and lang', () => (
    <Code
      lang="JavaScript"
      githubUrl="https://github.com/georgegillams/georgegillams.co.uk"
    >
      <pre>{`This is a code block containing preformatted text.
  this means that indentation {
    can {
      even {
        be {
          included
        }
      }
    }
  }`}</pre>
    </Code>
  ));
