// @flow
import React from 'react';
import { shallow } from 'enzyme';

import SideBar from './SideBar';

describe('<SideBar>', () => {
  const renderShallow = props => shallow(<SideBar {...props} />);

  it('Renders without crashing', () => {
    const wrapper = renderShallow();

    expect(wrapper.find('div')).toHaveLength(1);
  });
});
