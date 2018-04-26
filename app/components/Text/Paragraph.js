// @flow
import React from 'react';
import classNames from 'classnames';

import { ParagraphStyle, TextCenter, FullWidth } from './style';

export type ParagraphProps = {
  children: string,
  className?: ?string,
  center: boolean,
  full: boolean
};

export default function Paragraph(props: ParagraphProps) {
  const { children, className, center, full, ...rest } = props;
  return (
    <p
      {...rest}
      className={classNames(
        ParagraphStyle,
        center ? TextCenter : '',
        full ? FullWidth : '',
        className)}>
      {children}
    </p>
  )
}

Paragraph.defaultProps = {
  center: false,
  full: false
};
