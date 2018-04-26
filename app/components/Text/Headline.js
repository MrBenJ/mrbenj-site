// @flow
import React from 'react';
import classNames from 'classnames';

import { HeadlineStyle, TextCenter, FullWidth } from './style';
export type HeadlineProps = {
  className?: ?string,
  children: string,
  center: boolean,
  full: boolean
};

export default function Headline(props: HeadlineProps) {
  const {
    children,
    className,
    center,
    full,
    ...rest } = props;

  return (
    <p
      {...rest}
      className={
        classNames(
          HeadlineStyle,
          center ? TextCenter : '',
          full ? FullWidth : '',
          className)}>
        {children}
    </p>
  );
}
Headline.defaultProps = {
  center: false,
  full: false
};
