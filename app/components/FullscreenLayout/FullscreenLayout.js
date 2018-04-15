// @flow
import React, { type Node } from 'react';

import style from './style';

export type FullscreenLayoutProps = {
  children?: Node | string
};

export default function FullscreenLayout({ children }: FullscreenLayoutProps): Node {
  return (
    <div className={style}>
      {children}
    </div>
  );
}
