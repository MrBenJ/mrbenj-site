// @flow
import React, { type Node } from 'react';
import classNames from 'classnames';

import style from './style';
export type ImageProps = {
  src: string,
  circle: ?boolean,
  className?: ?string
};

export default function Image(props: ImageProps): Node {
  const { circle, ...rest } = props;
  return (
    <img
      {...rest}
      className={classNames(style, props.className,{
        circle
      })}
    />
  )
}
