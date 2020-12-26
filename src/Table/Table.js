import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';

import STYLES from './table.scss';

const getClassName = cssModules(STYLES);

const commonPropTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const commonDefaultProps = {
  children: null,
  className: null,
};

const Table = props => {
  const { className, children, ...rest } = props;

  return (
    <table
      className={getClassName('table__table')}
      cellSpacing="4"
      cellPadding="4"
      {...rest}
    >
      {children}
    </table>
  );
};

Table.propTypes = {
  ...commonPropTypes,
};

Table.defaultProps = {
  ...commonDefaultProps,
};

const Head = props => {
  const { className, children, ...rest } = props;

  return (
    <thead className={getClassName('table__head')} {...rest}>
      {children}
    </thead>
  );
};

Head.propTypes = {
  ...commonPropTypes,
};

Head.defaultProps = {
  ...commonDefaultProps,
};

const Body = props => {
  const { className, children, ...rest } = props;

  return (
    <tbody className={getClassName('table__body')} {...rest}>
      {children}
    </tbody>
  );
};

Body.propTypes = {
  ...commonPropTypes,
};

Body.defaultProps = {
  ...commonDefaultProps,
};

const Row = props => {
  const { className, children, ...rest } = props;

  return (
    <tr className={getClassName('table__row')} {...rest}>
      {children}
    </tr>
  );
};

Row.propTypes = {
  ...commonPropTypes,
};

Row.defaultProps = {
  ...commonDefaultProps,
};

const Cell = props => {
  const { className, children, ...rest } = props;

  return (
    <th className={getClassName('table__cell')} {...rest}>
      {children}
    </th>
  );
};

Cell.propTypes = {
  ...commonPropTypes,
};

Cell.defaultProps = {
  ...commonDefaultProps,
};

export default Table;
export { Table, Head, Body, Row, Cell };
