import React from 'react';

import { Table, Head, Body, Row, Cell } from './index';

export default { title: 'Table', component: Table };

export const Default = () => (
  <Table>
    <Head>
      <Row>
        <Cell>col 1</Cell>
        <Cell>col 2</Cell>
        <Cell>col 3</Cell>
      </Row>
    </Head>
    <Body>
      <Row>
        <Cell>1.1</Cell>
        <Cell>1.2</Cell>
        <Cell>1.2</Cell>
      </Row>
      <Row>
        <Cell>2.1</Cell>
        <Cell>2.2</Cell>
        <Cell>2.2</Cell>
      </Row>
    </Body>
  </Table>
);
