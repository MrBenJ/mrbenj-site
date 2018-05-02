// @flow
import React from 'react';
import { shallow } from 'enzyme';

import SideBarItem from './SideBarItem';

describe('<SideBarItem> tests', () => {
  const renderShallow = props => shallow(<SideBarItem {...props} />);

  it('Renders without crashing', () => {
    const wrapper = renderShallow({
      to: "/speaking",
      children: "hello world"
    });

    expect(wrapper.find('NavLink')).toHaveLength(1);
  });

});
