// @flow
import React, { type Node } from 'react';
import { css } from 'emotion';
import classNames from 'classnames';

// import style from './style';

export type FlexContainerProps = {
  className?: ?string,
  children: Node,
  'flex-direction': 'row' | 'column' | 'column-reverse',
  'justify-content': 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between',
  'align-items': 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',
  'flex-wrap': 'wrap' | 'nowrap' | 'wrap-reverse'
};

export default function FlexContainer(props: FlexContainerProps): Node {
  return (
    <div
      className={classNames(props.className, css`
        display: flex;
        width: 100%;
        height: 100%;

        flex-direction: ${props['flex-direction']};
        justify-content: ${props['justify-content']};
        align-items: ${props['align-items']};
        flex-wrap: ${props['flex-wrap']};
        `)}>
      {props.children}
    </div>


  );
}

FlexContainer.defaultProps = {
  'flex-direction': 'row',
  'justify-content': 'flex-start',
  'align-items': 'flex-start',
  'flex-wrap': 'wrap'
};
