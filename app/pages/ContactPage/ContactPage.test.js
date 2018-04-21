// @flow
import React from 'react';
import { shallow } from 'enzyme';

import ContactPage from './ContactPage';

describe('<ContactPage>', () => {
  const renderShallow = props => shallow(<ContactPage {...props} />);

  it('Renders without dying', () => {
    const wrapper = renderShallow();

    expect(wrapper.find('div').length).toBeTruthy();
  });
});
