// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

import SideBarItem from './SideBarItem';
import FlexContainer from '@app/components/FlexContainer';
import FlexItem from '@app/components/FlexItem';
import Icon from '@app/components/Icon';
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

  toggleOpen = (e: SyntheticEvent<HTMLElement>) => {
    const { isOpen } = this.state;

    if(['A', 'I'].includes(e.currentTarget.tagName)) {
      this.setState({ isOpen: !isOpen});
    }
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div
        className={classNames(style, {
          open: isOpen
        })}
      >
      <Icon
        name={isOpen ? 'fa-times' : 'fa-bars'}
        className="toggle"
        onClick={this.toggleOpen}
      />
      <FlexContainer
        className="link-container"
        flex-direction="column"
        align-items="flex-start"
      >
        <FlexItem
          className="full"
          align-self="flex-start">
          <SideBarItem
            exact
            to="/"
            activeClassName="active"
            onClick={this.toggleOpen}
          >Home
          </SideBarItem>
        </FlexItem>
        <FlexItem
          className="full"
          align-self="flex-start">
          <SideBarItem
            to="/contact"
            activeClassName="active"
            onClick={this.toggleOpen}
          >Contact
        </SideBarItem>
        </FlexItem>
        <FlexItem
          className="full"
          align-self="flex-start">
          <SideBarItem
            to="/blog"
            activeClassName="active"
            onClick={this.toggleOpen}
          >Blog
        </SideBarItem>
        </FlexItem>
        <FlexItem
          className="full"
          align-self="flex-start">
          <SideBarItem
            to="/speaking"
            activeClassName="active"
            onClick={this.toggleOpen}
          >Speaking
        </SideBarItem>
        </FlexItem>
      </FlexContainer>
      </div>
    );
  }
}

export default SideBar;
