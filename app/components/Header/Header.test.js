// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header>', () => {
  const renderShallow = props => shallow(<Header {...props} />);

  it('Renders without crashing', () => {
    const wrapper = renderShallow();

    expect(wrapper.find('header')).toHaveLength(1);
  });

  xit('Renders an administrator view with su', () => {

  });
});
