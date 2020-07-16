#!/usr/bin/env node

import {
  parseMultiLineElements,
  parseLinesForQuoteBlock,
} from '../multiLineElementLexer.js';
import { DEFAULT_SUPPORTED_FEATURES } from '../constants.js';

// #region individual lists
test('parses lines containing no comment block', () => {
  const result = parseLinesForQuoteBlock([
    { type: 'line', content: 'Line 1' },
    { type: 'line', content: 'Line 2' },
    { type: 'line', content: 'Line 3' },
    { type: 'line', content: 'Line 4' },
  ]);
  expect(result.error).toBe(undefined);
  expect(result).toMatchSnapshot();
});

test('parses lines to insert comment block at start', () => {
  const result = parseLinesForQuoteBlock([
    { type: 'line', content: '> Quote line 1' },
    { type: 'line', content: '> Quote line 2' },
    { type: 'line', content: '> Quote line 3' },
    { type: 'line', content: 'Line 1' },
    { type: 'line', content: 'Line 2' },
    { type: 'line', content: 'Line 3' },
  ]);
  expect(result.error).toBe(undefined);
  expect(result).toMatchSnapshot();
});

test('parses lines to insert comment block in middle', () => {
  const result = parseLinesForQuoteBlock([
    { type: 'line', content: 'Line 1' },
    { type: 'line', content: 'Line 2' },
    { type: 'line', content: '> Quote line 1' },
    { type: 'line', content: '> Quote line 2' },
    { type: 'line', content: '> Quote line 3' },
    { type: 'line', content: 'Line 3' },
  ]);
  expect(result.error).toBe(undefined);
  expect(result).toMatchSnapshot();
});
// #endregion individual lists

// #region structure
test('parses comment block inside section', () => {
  const result = parseMultiLineElements(
    [
      { type: 'line', content: 'Line 1' },
      {
        type: 'section',
        children: [
          { type: 'line', content: 'Line 2' },
          { type: 'line', content: '> Quote line 1' },
          { type: 'line', content: '> Quote line 2' },
          { type: 'line', content: '> Quote line 3' },
          { type: 'line', content: 'Line 3' },
        ],
      },
      { type: 'line', content: 'Line 4' },
    ],
    DEFAULT_SUPPORTED_FEATURES,
  );
  expect(result.error).toBe(undefined);
  expect(result).toMatchSnapshot();
});

test('ignores comment block if feature is unsupported', () => {
  const result = parseMultiLineElements(
    [
      { type: 'line', content: 'Line 1' },
      { type: 'line', content: 'Line 2' },
      { type: 'line', content: '> Unsupported quote line 1' },
      { type: 'line', content: '> Unsupported quote line 2' },
      { type: 'line', content: '> Unsupported quote line 3' },
      { type: 'line', content: 'Line 3' },
    ],
    [],
  );
  expect(result.error).toBe(undefined);
  expect(result).toMatchSnapshot();
});
// #endregion structure
