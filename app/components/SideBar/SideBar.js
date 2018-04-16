// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import style from './style';

export type SideBarProps = {
  isOpen?: boolean
};

export type SideBarState = {
  isOpen: boolean
};

class SideBar extends Component<SideBarProps, SideBarState> {
  constructor(props: SideBarProps) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  static defaultProps = {
    isOpen: false
  };

  static getDerivedStateFromProps(nextProps: SideBarProps) {
    return { isOpen: nextProps.isOpen };

  }

  render() {
    const { isOpen } = this.state;

    return (
      <div className={classNames(style, {
        open: isOpen
      })}>
        Sidebar
      </div>
    );
  }
}

export default SideBar;
