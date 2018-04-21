// @flow
import React, { Component } from 'react';

import classNames from 'classnames';
import { Link } from 'react-router-dom';

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
        onClick={this.toggleOpen} />
      <div className="link-container">
        <Link to="/" onClick={this.toggleOpen}>Home</Link>
        <Link to="/contact" onClick={this.toggleOpen}>Contact</Link>
        <Link to="/blog" onClick={this.toggleOpen}>Blog</Link>
        <Link to="/speaking" onClick={this.toggleOpen}>Speaking</Link>
      </div>
      </div>
    );
  }
}

export default SideBar;
