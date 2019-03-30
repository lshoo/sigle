import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default () => (
  <ul>
    <li>
      <Link href="/a" as="/a">
        <a>a</a>
      </Link>
    </li>
    <li>
      <Link href="/b" as="/b">
        <a>b</a>
      </Link>
    </li>
    <li>
      <Title>Heyo</Title>
    </li>
  </ul>
);