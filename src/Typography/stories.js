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

import {
  ArticleDate,
  Quote,
  Section,
  Paragraph,
  SubSection,
  AnimatedContent,
  TextLink,
  MarkdownRenderer,
} from './index';

class StatefulAnimatedContent extends Component {
  constructor(props) {
    super(props);

    this.state = { inView: false };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ inView: !this.state.inView });
          }}
        >
          Toggle
        </button>
        <AnimatedContent inView={this.state.inView} {...this.props} />
      </div>
    );
  }
}

storiesOf('Quote', module).add('default', () => (
  <Quote>Lorem ipse dolor sit amet.</Quote>
));
storiesOf('Section', module)
  .add('Default', () => <Section name="Test" />)
  .add('With anchor', () => <Section anchor name="Test" />)
  .add('No padding', () => <Section anchor noPadding name="Test" />)
  .add('With content and padding', () => (
    <Section anchor name="Test">
      Some content
    </Section>
  ))
  .add('With content', () => (
    <Section noPadding anchor name="Test">
      Some content
    </Section>
  ))
  .add('No padding no anchor', () => (
    <Section anchor={false} noPadding name="Test" />
  ))
  .add('Link', () => (
    <Section anchor={false} noPadding name="Test" link></Section>
  ));
storiesOf('SubSection', module)
  .add('Default', () => <SubSection name="Test" />)
  .add('Without anchor', () => <SubSection name="Test" anchor={false} />)
  .add('No padding', () => <SubSection noPadding name="Test" />)
  .add('With content and padding', () => (
    <SubSection name="Test">Some content</SubSection>
  ))
  .add('With content', () => (
    <SubSection noPadding name="Test">
      Some content
    </SubSection>
  ));
storiesOf('Paragraph', module).add('Default', () => (
  <Paragraph>Test</Paragraph>
));
storiesOf('TextLink', module)
  .add('Default', () => (
    <TextLink href="/lol" name="Test">
      Test
    </TextLink>
  ))
  .add('External', () => (
    <div>
      This is an external link to{' '}
      <TextLink external href="/lol" name="Test">
        Test
      </TextLink>{' '}
      content on another site.
    </div>
  ))
  .add('Light external', () => (
    <TextLink light external href="/lol" name="Test">
      Test
    </TextLink>
  ));
storiesOf('ArticleDate', module).add('default', () => (
  <ArticleDate date={new Date(2019, 4, 5, 10, 11, 12)} />
));
storiesOf('AnimatedContent', module)
  .add('In view', () => (
    <AnimatedContent inView>
      <div
        style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}
      />
    </AnimatedContent>
  ))
  .add('Out of view', () => (
    <AnimatedContent inView={false}>
      <div
        style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}
      />
    </AnimatedContent>
  ))
  .add('Stateful', () => (
    <StatefulAnimatedContent>
      <div
        style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}
      />
    </StatefulAnimatedContent>
  ));
storiesOf('MarkdownRenderer', module)
  .add('Text only', () => (
    <MarkdownRenderer content="This is a simple test"></MarkdownRenderer>
  ))
  .add('Text with link', () => (
    <MarkdownRenderer content="This contains a [link](/test) to an internal page."></MarkdownRenderer>
  ))
  .add('Text with extenal link', () => (
    <MarkdownRenderer content="This contains a [link](https://www.google.com/) to an external page."></MarkdownRenderer>
  ))
  .add('Text with inline code', () => (
    <MarkdownRenderer content="This contains some `code`."></MarkdownRenderer>
  ))
  .add('Text with strikethrough', () => (
    <MarkdownRenderer content="This contains a ~striken~ section."></MarkdownRenderer>
  ))
  .add('Text with bold', () => (
    <MarkdownRenderer content="This contains a **bold** section."></MarkdownRenderer>
  ))
  .add('Text with italic', () => (
    <MarkdownRenderer content="This contains an _italic_ section."></MarkdownRenderer>
  ))
  .add('Text with code block', () => (
    <MarkdownRenderer
      content="This contains a block of code as follows:
``` js, github.com
code block
  code block
```"
    ></MarkdownRenderer>
  ))
  .add('Text with a big link', () => (
    <MarkdownRenderer
      content="This contains a large link:
*[Massive link](https://www.google.com)"
    ></MarkdownRenderer>
  ))
  .add('Youtube video', () => (
    <MarkdownRenderer content="!yt[ytv](https://www.youtube.com/watch?v=Nozh1zDj8_o)"></MarkdownRenderer>
  ))
  .add('Text with a quotation', () => (
    <MarkdownRenderer
      content="This contains a quotation as follows:
>This is a quote
"
    ></MarkdownRenderer>
  ))
  .add('Sectioned text', () => (
    <MarkdownRenderer
      content="
# Section
This is some section content.
"
    ></MarkdownRenderer>
  ))
  .add('Subsectioned text', () => (
    <MarkdownRenderer
      content="
## Subsection
This is some subsection content.
"
    ></MarkdownRenderer>
  ))
  .add('Linebreak', () => (
    <MarkdownRenderer
      content={`
Text before linebreak...


...text after linebreak.
`}
    ></MarkdownRenderer>
  ))
  .add('Sectioned text - long example', () => (
    <MarkdownRenderer
      content={`
# Section
This is some section content.
## SubSection
This is some text in a subsection

Let's throw in some \`code\` for good measure.
### SubSubSection
This is some text in a subsubsection
`}
    ></MarkdownRenderer>
  ))
  .add('Link and italic', () => (
    <MarkdownRenderer content="This contains a [link](/test) and _italics_"></MarkdownRenderer>
  ))
  .add('Link and italic (limited to just link)', () => (
    <MarkdownRenderer
      supportedFeatures={['link']}
      content="This contains a [link](/test) and _italics_"
    ></MarkdownRenderer>
  ))
  .add('Extreme', () => (
    <MarkdownRenderer
      content={`

# h1 Heading 8-)

paragraph 1

## h2 Heading

paragraph 2

### h3 Heading

paragraph 3

**This is bold text**

__This is italic text__

~Strikethrough~


## Quote


> This is a quote


## Blockquotes


> Blockquotes are currently unsupported

## Lists

Lists are currently unsupported

## Code

Inline \`code\`

Block code fences

\`\`\`
Sample text here...
\`\`\`
`}
    />
  ))
  .add('More extreme', () => (
    <MarkdownRenderer
      content={`
# h1 Heading 8-)

paragraph 1

## h2 Heading

paragraph 2

### h3 Heading

paragraph 3

## Horizontal Rules

___

---

***


## Typographic replacements

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---


## Emphasis

**This is bold text**

__This is bold text__

~Strikethrough~


## Quote


> This is a quote


## Blockquotes


> Blockquotes are currently unsupported


## Lists

Lists are currently unsupported


## Code

Inline \`code\`

Block code fences

\`\`\`
Sample text here...
\`\`\`

Language

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://google.com)

[link with title](http://google.com/ title text!)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg)

Like links, Images also have a footnote style syntax

`}
    />
  ));
