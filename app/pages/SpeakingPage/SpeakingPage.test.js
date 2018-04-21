// @flow
import React from 'react';
import { shallow } from 'enzyme';

import SpeakingPage from './SpeakingPage';

describe('<SpeakingPage', () => {
  const renderShallow = props => shallow(<SpeakingPage {...props} />);

  it('Renders without crashing', () => {
    const wrapper = renderShallow();

    expect(wrapper.find('div').length).toBeTruthy();
  });
});
