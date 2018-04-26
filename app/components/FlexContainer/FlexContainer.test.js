// @flow
import React from 'react';
import { shallow } from 'enzyme';

import FlexContainer from './FlexContainer';

describe('<FlexContainer>', () => {
  const renderShallow = props => shallow(<FlexContainer {...props} />);

  const children = <p>Hello</p>;

  it('Renders defaults without crashing', () => {
    const wrapper = renderShallow({
      children
    });
    expect(wrapper).toBeTruthy();
  });

});
