// @flow
import React from 'react';
import { shallow } from 'enzyme';

import SideBar from './SideBar';

describe('<SideBar>', () => {
  const renderShallow = props => shallow(<SideBar {...props} />);

  it('Renders without crashing', () => {
    const wrapper = renderShallow();

    expect(wrapper.find('div').length).toBeTruthy();
  });

  it('Renders some links', () => {
    const wrapper = renderShallow();

    expect(wrapper.find('Link').length).toBeTruthy();
  });

  it('Toggles open state on Icons', () => {
    const wrapper = renderShallow();

    wrapper.find('Icon').simulate('click', {
      currentTarget: { tagName: 'I'}}
    );

    expect(wrapper.state().isOpen).toBe(true);
  });

  it('... on Links', () => {
    const wrapper = renderShallow();

    wrapper.find('Link').first().simulate('click', {
      currentTarget: { tagName: 'A'}}
    );

    expect(wrapper.state().isOpen).toBe(true);
  });

  it("doesn't trigger on anything else", () => {
    const wrapper = renderShallow();

    wrapper.find('Icon').simulate('click', {
      currentTarget: { tagName: 'BR'}}
    );

    expect(wrapper.state().isOpen).toBe(false);
  })
});
