import React from 'react';
import renderer from 'react-test-renderer';

import { Card } from '../../src/Card';

describe('Card', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Card>Promociando</Card>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
