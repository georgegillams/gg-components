import React from 'react';

import { Input } from '../Input';

const TextArea = props => (
  <Input component={taProps => <textarea {...taProps} />} {...props} />
);

export default TextArea;
