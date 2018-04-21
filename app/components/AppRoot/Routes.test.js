// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Routes from './Routes';

describe('<AppRoot> Routes', () => {
  const renderShallow = props => shallow(<Routes {...props} />);

  it('Renders the routes with a fragment', () => {
    const wrapper = renderShallow();

    expect(wrapper).toBeTruthy();
    expect(wrapper.find('Route').length).toBeTruthy();

  });
});
