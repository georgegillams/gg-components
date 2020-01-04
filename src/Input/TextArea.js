import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const TextArea = props => (
  <Input component={taProps => <textarea {...taProps} />} {...props} />
);

export default TextArea;
