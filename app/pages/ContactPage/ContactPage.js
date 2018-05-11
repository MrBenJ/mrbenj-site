// @flow
import React, { type Node } from 'react';

import { Paragraph as P } from '@app/components/Text';
import style from './style';

export default function ContactPage(): Node {
  return (
    <div className={style}>
      <div className="centered-box">
        <P>Let&apos;s chat!</P>
        <P>Email me at: <a href="mailto:ben@mrbenj.io" target="_blank" rel="noopener noreferrer">ben@mrbenj.io</a></P>
      </div>
    </div>
  );
}
