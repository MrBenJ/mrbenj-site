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
  return (
    <div
      {...props}
      className={classNames(props.className, css`
        ${props['align-self']
          ? 'align-self:'+props['align-self']+';'
          : ''
        }
        `)}
    >
      {props.children}
    </div>
  );
}
