// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Icon from './Icon';

describe('<Icon> tests', () => {
  const renderShallow = props => shallow(<Icon {...props} />);

  it('Renders an icon with a name', () => {
    const wrapper = renderShallow({ name: 'fa-plus' });

    expect(wrapper.props().name).toBe('fa-plus');
  });

  it('Passes classnames down to the component props', () => {
    const wrapper = renderShallow({ name: 'fa-no', className: 'hidden' });
    const props = wrapper.props();

    expect(props.className.split(' ').includes('hidden')).toBe(true);
  });

  it('Passes additional props to the component', () => {
    const wrapper = renderShallow({ name: 'fa-lines', extra: 'props' });

    expect(wrapper.props().extra).toBe('props');
  });
});
