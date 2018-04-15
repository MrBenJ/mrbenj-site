// @flow
import React from 'react';
import type { Node } from 'react';

// import style from './style.scss';

export type FullscreenLayoutProps = {
  children?: ?Node | string
};

export default function FullscreenLayout({ children }: FullscreenLayoutProps): Node {
  return (
    <div className={""/*style.fslayout */}>
      {children}
    </div>
  );
}
