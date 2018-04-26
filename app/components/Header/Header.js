// @flow
import React, { type Node } from 'react';

import style from './style';

export type HeaderProps = {
  su?: ?string
};

export default function Header(props: HeaderProps): Node {
  const { su } = props;
  return (
    <header className={style}>
      {su ? '' : ''}
    </header>
  )
}
