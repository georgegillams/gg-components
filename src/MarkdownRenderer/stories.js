import React from 'react';
import { storiesOf } from '@storybook/react';

// import { cssModules } from '../helpers/cssModules';

// import STYLES from './stories.scss';

import { MarkdownRenderer } from './index';

// const LONG_TEXT =
//   'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.';

// const getClassName = cssModules(STYLES);

storiesOf('Markdown renderer', module)
  .add('Text only', () => <MarkdownRenderer content="This is a simple test" />)
  .add('Text with link', () => (
    <MarkdownRenderer content="This contains a [link](/test) to an internal page." />
  ))
  .add('Text with link - 2 paragraphs', () => (
    <MarkdownRenderer
      content={`This contains a [link](/test) to an internal page.

This contains a [link](/test) to an internal page.`}
    />
  ))
  .add('Text with extenal link', () => (
    <MarkdownRenderer content="This contains a [link](https://www.google.com/) to an external page." />
  ))
  .add('Text with inline code', () => (
    <MarkdownRenderer content="This contains some `code`." />
  ))
  .add('Text with footnote reference', () => (
    <MarkdownRenderer
      content={`This footnote[^1] points to something under the[^2] paragraph.\nThis is the end of the paragraph\n[^1]: This is the first footnote\n[^2]: This is the second footnote`}
    />
  ))
  .add('Text with citation reference', () => (
    <MarkdownRenderer content="This references!cite(Lee:2009) something further down the page, as does this!cite(Mack:2010)" />
  ))
  .add('Text with strikethrough', () => (
    <MarkdownRenderer content="This contains a ~striken~ section." />
  ))
  .add('Text with bold', () => (
    <MarkdownRenderer content="This contains a **bold** section." />
  ))
  .add('Text with italic', () => (
    <MarkdownRenderer content="This contains an _italic_ section." />
  ))
  .add('Text with bold italic', () => (
    <MarkdownRenderer content="This contains a **_bold italic_** section. And **_another_** one" />
  ))
  .add('Text with *** style bold italic', () => (
    <MarkdownRenderer content="This contains a ***bold italic*** section. And ***another*** one" />
  ))
  .add('Text with code block', () => (
    <MarkdownRenderer
      content="This contains a block of code as follows:
``` js, github.com
code block
  code block
```"
    />
  ))
  .add('Text with a big link', () => (
    <MarkdownRenderer
      content="This contains a large link:
*[Massive link](https://www.google.com)"
    />
  ))
  .add('Youtube video', () => (
    <MarkdownRenderer content="!yt[false](jofNR_WkoCE)" />
  ))
  .add('Text with a quotation', () => (
    <MarkdownRenderer
      content="This contains a quotation as follows:
> This is a quote
"
    />
  ))
  .add('Sectioned text', () => (
    <MarkdownRenderer
      content={`# Section

This is some section content.`}
    />
  ))
  .add('Subsectioned text', () => (
    <MarkdownRenderer
      content={`## Subsection

This is some subsection content.`}
    />
  ))
  .add('Sectioned text - long example', () => (
    <MarkdownRenderer
      content={`
# Section

This is some section content.

## Subsection

This is some text in a subsection

Let's throw in some \`code\` for good measure.

### SubSubSection

This is some text in a subsubsection
`}
    />
  ))
  .add('Link and italic', () => (
    <MarkdownRenderer content="This contains a [link](/test) and _italics_" />
  ))
  .add('Link and italic (limited to just link)', () => (
    <MarkdownRenderer
      supportedFeatures={['link']}
      content="This contains a [link](/test) and _italics_"
    />
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

_This is italic text_

~Strikethrough~

## Quote

> This is a quote

## Blockquotes

> This is a quote
> spanning several
> lines

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

_This is wonky text_

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

## Smart Images

![1x1][Minion](https://octodex.github.com/images/minion.png)(https://octodex.github.com/images/minion.png)
![1x1][Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg)(https://octodex.github.com/images/stormtroopocat.jpg)

Like links, Images also have a footnote style syntax

`}
    />
  ));
