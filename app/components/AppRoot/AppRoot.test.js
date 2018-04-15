// @flow

/* global
  describe
  it
  expect
*/
import React from 'react';
import { shallow } from 'enzyme';

import AppRoot from './AppRoot';

describe('<AppRoot> tests', () => {
  const renderShallow = props => shallow(<AppRoot {...props} />);

  it('Renders without crashing', () => {
    const wrapper = renderShallow();

    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('.approot')).toHaveLength(1);
    expect(wrapper.find('FullscreenLayout')).toHaveLength(1);
  });

});
