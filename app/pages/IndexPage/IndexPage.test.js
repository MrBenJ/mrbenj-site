// @flow
import React from 'react';
import { shallow } from 'enzyme';

import IndexPage from './IndexPage';

describe('<IndexPage>', () => {
  const renderShallow = props => shallow(<IndexPage {...props} />);

  it('renders without crashing', () => {
    const wrapper = renderShallow();

    expect(wrapper).toBeTruthy();
  });
});
