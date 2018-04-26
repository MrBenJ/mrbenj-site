// @flow
import React from 'react';
import classNames from 'classnames';

import { HeadlineStyle, TextCenter } from './style';
export type HeadlineProps = {
  className?: ?string,
  children: string,
  center?: ?boolean
};

export default function Headline(props: HeadlineProps) {
  const { children, className, center, ...rest } = props;
  return (
    <p
      {...rest}
      className={
        classNames(
          HeadlineStyle,
          center ? TextCenter : '',
          className)}>
        {children}
    </p>
  );
}
Headline.defaultProps = {
  center: false
};
