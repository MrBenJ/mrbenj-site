// @flow
import React, { type Node } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import style from './style/SideBarItem.style';

export type SideBarItemProps = {
  className?: ?string,
  activeClassName: string,
  to: string,
  children: Node
};

export default function SideBarItem(props: SideBarItemProps): Node {
  const { className, children, ...rest } = props;
  return (
    <NavLink
      {...rest}
      className={classNames(style, className)}
    >
      {children}
    </NavLink>
  );
}
