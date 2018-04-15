// @flow
import React, { Component } from 'react';

export type SideBarProps = {

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

  render() {
    return (
      <div>
        Sidebar
      </div>
    );
  }
}

export default SideBar;
