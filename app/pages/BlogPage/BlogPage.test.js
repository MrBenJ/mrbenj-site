// @flow
import React from 'react';
import { shallow } from 'enzyme';

import BlogPage from './BlogPage';

describe('<BlogPage>', () => {
  const renderShallow = props => shallow(<BlogPage {...props} />);

  it('Renders without crashing', () => {
    const wrapper = renderShallow();

    expect(wrapper.find('div').length).toBeTruthy();
  });
});
