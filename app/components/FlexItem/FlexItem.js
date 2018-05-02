// @flow
import React, { type Node } from 'react';
import classNames from 'classnames';
import { css } from 'emotion';

export type FlexItemProps = {
  children: Node,
  className?: ?string,
  'align-self'?: ?('flex-start' | 'flex-end' | 'center' | 'stretch')
};

export default function FlexItem(props: FlexItemProps): Node {
  const {
    'align-self': alignSelf,
    ...rest } = props;
  return (
    <div
      {...rest}
      className={classNames(props.className, css`
        ${alignSelf
          ? 'align-self:'+alignSelf+';'
          : ''
        }
        `)}
    >
      {props.children}
    </div>
  );
}
