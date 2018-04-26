// @flow
import React from 'react';
import classNames from 'classnames';

import { ParagraphStyle } from './style';

export type ParagraphProps = {
  children: string,
  className?: ?string
};

export default function Paragraph(props: ParagraphProps) {
  const { children, className, ...rest } = props;
  return (
    <p
      {...rest}
      className={classNames(ParagraphStyle, className)}>
      {children}
    </p>
  )
}
