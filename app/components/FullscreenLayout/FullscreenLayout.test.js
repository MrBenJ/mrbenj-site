// @flow
import React from 'react';
import { shallow } from 'enzyme';

import FullscreenLayout from './FullscreenLayout';

describe('<FullscreenLayout> tests', () => {
  const renderShallow = props => shallow(<FullscreenLayout {...props} />);

  it('Renders without crashing', () => {
    const wrapper = renderShallow();

    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper).toBeTruthy();
  });
});
