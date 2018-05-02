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

  const {
    'flex-direction': flexDirection,
    'justify-content': justifyContent,
    'align-items': alignItems,
    'flex-wrap': flexWrap,
    children,
    ...rest } = props;
  return (
    <div
      {...rest}
      className={classNames(props.className, css`
        display: flex;
        width: 100%;
        height: 100%;

        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        flex-wrap: ${flexWrap};
        `)}>
      {children}
    </div>


  );
}

FlexContainer.defaultProps = {
  'flex-direction': 'row',
  'justify-content': 'flex-start',
  'align-items': 'flex-start',
  'flex-wrap': 'wrap'
};
