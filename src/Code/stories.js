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
